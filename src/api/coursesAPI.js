
const BASH_URL = "https://binar-project-production.up.railway.app";

export const consumeCourse =  {
    getCourses : async () => {
        try {
            const response = await fetch(`${BASH_URL}/courses`);
            const data = await response.json();
            return data;
        } catch (error) {
            return error;
        }
    },


}