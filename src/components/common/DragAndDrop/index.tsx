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
  const preventEventHandle = (e: React.DragEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const onDragEnter = (e: React.DragEvent<HTMLElement>) => {
    preventEventHandle(e);
    if (dragIngHandle) dragIngHandle(true);
  };

  const onDrop = (e: React.DragEvent<HTMLElement>) => {
    preventEventHandle(e);
    dropHandle(e.dataTransfer.files);
    if (dragIngHandle) dragIngHandle(false);
  };

  const onDragLeave = (e: React.DragEvent<HTMLElement>) => {
    preventEventHandle(e);

    if (e.currentTarget.contains(e.relatedTarget as Node)) return;
    if (dragIngHandle) dragIngHandle(false);
  };

  return (
    <>
      {cloneElement(children, {
        onDragEnter,
        onDrop,
        onDragOver: preventEventHandle,
        onDragLeave,
      })}
    </>
  );
}
