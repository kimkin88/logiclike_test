export type SiderProps = {
    tagsArray: string[],
    activeTag: string,
    setActiveTag: (tag: string) => void
}

export interface ButtonProps {
    title: string;
    active?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface Course {
    name: string;
    id: string;
    image: string;
    bgColor: string;
    tags: string[];
}

export type CoursesArray = Course[];

export interface ContentProps {
    data: CoursesArray;
    activeTag: string;
}

export interface CardProps {
    name: string;
    image: string;
    bgColor: string;
}