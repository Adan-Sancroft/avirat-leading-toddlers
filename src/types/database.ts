export interface Content {
  id: string;
  section: string;
  title: string;
  content: string;
  image_url?: string;
  created_at: string;
  updated_at: string;
}

export interface Staff {
  id: string;
  name: string;
  qualification: string;
  designation: string;
  image_url?: string;
  created_at: string;
}

export interface Activity {
  id: string;
  title: string;
  description: string;
  image_url?: string;
  type: "activity" | "blog" | "news";
  author?: string;
  slug?: string;
  full_content?: string;
  meta_description?: string;
  published?: boolean;
  created_at: string;
}

export interface Enquiry {
  id: string;
  parent_name: string;
  child_name: string;
  child_age: string;
  program_interest: string;
  contact_number: string;
  email: string;
  message?: string;
  created_at: string;
  status: "new" | "contacted" | "enrolled" | "closed";
}

export interface User {
  id: string;
  email: string;
  role: "admin" | "staff";
  created_at: string;
}

export interface Gallery {
  id: string;
  event_name: string;
  event_slug: string;
  image_url: string;
  image_order: number;
  description?: string;
  created_at: string;
}
