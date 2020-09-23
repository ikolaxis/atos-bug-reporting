export interface BugModel {
  id: string;
  title: string;
  priority: number;
  reporter: string;
  status: string;
  updateAt: Date;
  createdAt: Date;
}
