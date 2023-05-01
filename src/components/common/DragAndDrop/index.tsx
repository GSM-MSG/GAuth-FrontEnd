import { cloneElement, ReactElement } from 'react';

type Props = {
  children: ReactElement;
  dropHandle: (e: FileList) => void;
  draggingHandle?: (e: boolean) => void;
};

export default function DragAndDrop({
  children,
  dropHandle,
  draggingHandle,
}: Props) {
  const preventEventHandle = (e: React.DragEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const onDragEnter = (e: React.DragEvent<HTMLElement>) => {
    preventEventHandle(e);
    if (draggingHandle) draggingHandle(true);
  };

  const onDrop = (e: React.DragEvent<HTMLElement>) => {
    preventEventHandle(e);
    dropHandle(e.dataTransfer.files);
    if (draggingHandle) draggingHandle(false);
  };

  const onDragLeave = (e: React.DragEvent<HTMLElement>) => {
    preventEventHandle(e);

    if (e.currentTarget.contains(e.relatedTarget as Node)) return;
    if (draggingHandle) draggingHandle(false);
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
