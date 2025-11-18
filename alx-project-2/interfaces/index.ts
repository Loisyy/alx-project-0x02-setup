// interfaces/index.ts
export interface CardProps {
  title: string;
  content: string;
}

export interface PostData {
    title: string;
    content: string;
}

export interface PostModalProps {
    title: string;
    content: string;
}

export interface ButtonProps {
  children: React.ReactNode; // text or elements inside the button
  size?: "small" | "medium" | "large";
  shape?: "rounded-sm" | "rounded-md" | "rounded-full";
  onClick?: () => void;
}

export interface PostProps {
  userId: number;
  title: string;
  content: string;
}

export interface UserProps {
  id: number;
  name: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
}