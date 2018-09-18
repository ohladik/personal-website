import Vuex from "vuex";
import projects from "./projects_data";
import jobs from "./jobs_data";

const createStore = () => {
  return new Vuex.Store({
    state: {
      projects,
      jobs,
      selectedProject: null
    },
    mutations: {
      projectSelected(state, project) {
        state.selectedProject = project;
      },
      setSelectedProjectFromURL(state, projectId) {
        state.selectedProject = state.projects.filter(
          project => project.id == projectId
        )[0];
      }
    },
    getters: {
      projects: state => {
        return state.projects;
      },
      jobs: state => {
        // most recent first (higher ID)
        return state.jobs.sort((a, b) => a.id < b.id);
      },
      selectedProject: state => {
        return state.selectedProject;
      }
    }
  });
};

export default createStore;
