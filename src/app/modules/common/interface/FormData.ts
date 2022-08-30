export interface FormData {
  id?: number;
  marketingName: string;
  technicalName?: string;
  description?: string | number;
  where?: string;
  type?: string;
  start?: Date;
  end?: Date;
}
