type Category = 'green' | 'yellow' | 'red'

type Status = 'done' | 'undone'

interface Task {
  id: string
  authorId: string
  category: Category
  status: Status
  title: string
  content: string
  slug: string
  createdAt: string
  updatedAt: string
}

export interface FetchTasksListResponse{
  tasks: Task[]
}