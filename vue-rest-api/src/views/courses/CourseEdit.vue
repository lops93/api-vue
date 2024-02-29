<script setup>
import useCourses from "../../composables/courses";
import { onMounted } from "vue";
import MainLayout from "../../components/layouts/MainLayout.vue";

const { course, getCourse, updateCourse, errors } = useCourses();

const props = defineProps({
  id: {
    required: true,
    type: String,
  },
});

onMounted(() => getCourse(props.id));
</script>
<template>
  <MainLayout>
    <div class="mt-4">
      <div class="flex items-center justify-center flex-1 min-w-0">
        <h2
          class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight"
        >
          Edit a Course
        </h2>
      </div>
      <form
        class="max-w-md p-4 mx-auto bg-white rounded-md shadow-md"
        @submit.prevent="updateCourse($route.params.id)"
      >
        <div class="space-y-6">
          <div class="mb-6">
            <label
              for="name"
              class="block mb-2 text-sm font-medium text-gray-900"
              >Course</label
            >
            <input
              type="text"
              id="course"
              v-model="course.course"
              class="w-full px-4 py-2 border rounded outline-none focus:border-blue-500 focus:shadow-outline"
            />
            <div v-if="errors.course">
              <span class="text-sm text-red-400">{{ errors.course[0] }}</span>
            </div>
          </div>
          <div class="mb-6">
            <label
              for="subject"
              class="block mb-2 text-sm font-medium text-gray-900"
              >Subject</label
            >
            <input
              type="text"
              id="subject"
              v-model="course.subject"
              class="w-full px-4 py-2 border rounded outline-none focus:border-blue-500 focus:shadow-outline"
            />
            <div v-if="errors.subject">
              <span class="text-sm text-red-400">{{ errors.subject[0] }}</span>
            </div>
          </div>
          <div class="mt-4">
            <button
              type="submit"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  </MainLayout>
</template>