import { v4 as uuidv4 } from "uuid";

const INITIAL_STATE = {
  data: [
    {
      id: uuidv4(),
      title: "React Native",
      description:
        "React Native is one of the most popular ways to build native mobile apps, and it allows you to leverage your existing web skill set. This course teaches you how to use React Native components, debug, consume an HTTP API, and more.",
    },
    {
      id: uuidv4(),
      title: "JavaScript for Begginers",
      description:
        "The JavaScript Specialist course focuses on the fundamental concepts of the JavaScript language. These include using control structures for program flow, manipulating the JavaScript DOM, using language objects, creating expressions, and creating and using custom objects.",
    },
    {
      id: uuidv4(),
      title: "sera",
      description: "sera",
    },
  ],
};

function CoursesReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_COURSE":
      return {
        ...state,
        data: [...state.data, { id: uuidv4(), ...action.course }],
      };
    case "REMOVE_COURSE":
      return {
        ...state,
        data: [],
      };
    default:
      return state;
  }
}

export default CoursesReducer;
