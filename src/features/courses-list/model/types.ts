type TCourseListElement = {
  id: string;
  name: string;
  description: string;
};

type TCreateCourseListElementCommand = {
  name: string;
  description: string;
};

type TDeleteCourseListElementCommand = {
  id: string;
};
