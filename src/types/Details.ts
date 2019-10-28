export interface Description {
  en: string;
  nl: string;
}

export interface Details {
  id: number;
  title: string;
  description: { [key: string]: Description };
}
