export type TCourseListElement = {
  id: string;
  name: string;
  description: string;
};

export type TCreateCourseListElementCommand = {
  name: string;
  description: string;
};

export type TDeleteCourseListElementCommand = {
  id: string;
};
