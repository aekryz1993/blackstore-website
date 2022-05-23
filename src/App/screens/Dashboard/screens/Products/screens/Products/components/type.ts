export interface IFormInput {
  file: File | null;
  label: string | null;
  category: string;
}

export interface ImageInputTypes {
  onFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  image?: string | null | undefined;
  fileRef: React.RefObject<HTMLInputElement>;
}

export type EventTargetExtended = EventTarget &
  HTMLInputElement & { files: FileList };
