import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

axios.defaults.baseURL = "http://localhost:8000/api/v1/";

export default function useCourses() {
  const courses = ref([]);
  const course = ref([]);
  const errors = ref([]);
  const router = useRouter();

  const getCourses = async () => {
    const response = await axios.get("courses");
    courses.value = response.data.data;
  };

  const getCourse = async (id) => {
    const response = await axios.get("courses/" + id);
    course.value = response.data.data;
  };

  const storeCourse = async (data) => {
    try {
      await axios.post("courses", data);
      await router.push({ name: "CourseIndex" });
    } catch (error) {
      if (error.response.status === 422) {
        errors.value = error.response.data.errors;
      }
    }
  };

  const updateCourse = async (id) => {
    try {
      await axios.put("courses/" + id, course.value);
      await router.push({ name: "CourseIndex" });
    } catch (error) {
      if (error.response.status === 422) {
        errors.value = error.response.data.errors;
      }
    }
  };

  const destroyCourse = async (id) => {
    if (!window.confirm("Are you sure?")) {
      return;
    }
    await axios.delete("courses/" + id);
    await getCourses();
  };

  return {
    course,
    courses,
    getCourse,
    getCourses,
    storeCourse,
    updateCourse,
    destroyCourse,
    errors,
  };
}
