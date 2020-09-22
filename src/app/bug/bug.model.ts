export interface BugModel {
  id: string;
  title: string;
  description: string;
  priority: number;
  reporter: string;
  status: string;
  updatedAt: Date;
  createdAt: Date;
}
