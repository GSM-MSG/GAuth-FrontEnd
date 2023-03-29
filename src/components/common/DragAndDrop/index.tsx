import { cloneElement, ReactElement } from 'react';

type Props = {
  children: ReactElement;
  dropHandle: (e: FileList) => void;
  dragIngHandle?: (e: boolean) => void;
};

export default function DragAndDrop({
  children,
  dropHandle,
  dragIngHandle,
}: Props) {
  const onDragEnter = (e: React.DragEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (dragIngHandle) dragIngHandle(true);
  };

  const onDrop = (e: React.DragEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
    dropHandle(e.dataTransfer.files);
    if (dragIngHandle) dragIngHandle(false);
  };

  const onDragOver = (e: React.DragEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const onDragLeave = (e: React.DragEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.currentTarget.contains(e.relatedTarget as Node)) return;
    if (dragIngHandle) dragIngHandle(false);
  };

  return (
    <>
      {cloneElement(children, { onDragEnter, onDrop, onDragOver, onDragLeave })}
    </>
  );
}
