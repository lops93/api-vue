<script setup>
import useCourses from "../../composables/courses";
import { onMounted } from "vue";
import MainLayout from "../../components/layouts/MainLayout.vue";

const { courses, getCourses, destroyCourse } = useCourses();

onMounted(() => getCourses());
</script>
<template>
  <MainLayout>
    <div class="mt-4">
      <div class="lg:flex lg:items-center lg:justify-between">
        <div class="flex-1 min-w-0">
          <h2
            class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight"
          >
            Avaiable Courses
          </h2>
        </div>
        <div class="flex m-2 lg:ml-4 lg:mt-0">
          <span class="hidden sm:block">
            <div>
              <RouterLink
                :to="{ name: 'CourseCreate' }"
                class="float-right px-4 py-2 text-white bg-indigo-500 rounded hover:g-indigo-700"
              >
                Add a New Course</RouterLink
              >
            </div>
          </span>
        </div>
      </div>

      <div class="relative overflow-x-auto">
        <table
          class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
        >
          <thead
            class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
          >
            <tr>
              <th scope="col" class="px-6 py-3">Course</th>
              <th scope="col" class="px-6 py-3">Subject</th>
              <th scope="col" class="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="course in courses"
              :key="course.id"
              class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <td class="px-6 py-4">
                {{ course.course }}
              </td>
              <td class="px-6 py-4">
                {{ course.subject }}
              </td>
              <td class="px-6 py-4 space-x-2">
                <RouterLink
                  :to="{ name: 'CourseEdit', params: { id: course.id } }"
                  class="text-white bg-green-500 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Edit
                </RouterLink>
                <button
                  @click="destroyCourse(course.id)"
                  class="text-white bg-red-500 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </MainLayout>
</template>