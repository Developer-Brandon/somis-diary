import { ArrangeState } from '@/assets/js/enums/ArrangeState'

const state = () => ({
  selectedCat: {
    name: '',
    birthday: '',
    gender: '',
    species: '',
    kg: '',
    introduce: '',
  },
  searchBarElements: {
    catList: [
      // {
      // index
      // name
      // birthday
      // gender
      // species
      // kg
      // introduce
      // },
      // .
      // .
      // .
    ],
    selectedCatName: '',
    startDateTime: '',
    endDateTime: '',
    searchDiaryTitle: '',
    searchDiaryContents: '',
  },
  arrangeDiaryList: [],
  arrangeListType: ArrangeState.NORMAL_TYPE, // NormalType 은 일반적인 게시판 리스트입니다.
})
const getters = {
  selectedCat: (state) => state.selectedCat,
  searchBarElements: (state) => state.searchBarElements,
  catList: (state) => state.searchBarElements.catList,
  arrangeListType: (state) => state.arrangeListType,
  searchDiaryTitle: (state) => state.searchBarElements.searchDiaryTitle,
  searchDiaryContents: (state) => state.searchBarElements.searchDiaryContents,
}
const mutations = {
  setSearchBarElements(state, params) {
    state.searchBarElements = params.searchBarElements
  },
  setCatList(state, params) {
    state.searchBarElements.catList = params.dummyCatList
  },
  setSearchDiaryTitle(state, params) {
    state.searchBarElements.searchDiaryTitle = params.searchDiaryTitle
  },
  setSearchDiaryContents(state, params) {
    state.searchBarElements.searchDiaryContents = params.searchDiaryContents
  },
  clearSearchData(state) {
    state.searchBarElements = {}
  },
  clearListType(state) {
    state.arrangeListType = ArrangeState.NORMAL_TYPE
  },
  setSelectedCat(state, params) {
    state.selectedCat = params.selectedCat
  },
}
const actions = {
  GET_CAT_LIST: ({ commit }, params) => new Promise((resolve) => {
    console.log(params)
    // TODO: Call cat list api
    const dummyCatList = [{
      index: 1,
      name: '소미',
    }, {
      index: 2,
      name: '꼬미',
    }, {
      index: 3,
      name: '수미',
    }, {
      index: 4,
      name: '세미',
    }, {
      index: 5,
      name: '소미',
    }, {
      index: 6,
      name: '꼬미',
    }, {
      index: 7,
      name: '수미',
    }, {
      index: 8,
      name: '세미',
    }, {
      index: 9,
      name: '소미',
    }, {
      index: 10,
      name: '꼬미',
    }, {
      index: 11,
      name: '수미',
    }, {
      index: 12,
      name: '세미',
    }]
    commit('setCatList', { dummyCatList })
    resolve()
  }),
  SET_SEARCH_DIARY_TITLE: ({ commit }, params) => new Promise((resolve) => {
    commit('setSearchDiaryTitle', params)
    resolve()
  }),
  SET_SEARCH_DIARY_CONTENTS: ({ commit }, params) => new Promise((resolve) => {
    commit('setSearchDiaryContents', params)
    resolve()
  }),
  GET_DIARY_LIST_BY_VALUES: ({ commit }) => new Promise((resolve) => {
    commit('setSearchBarElements')
    resolve()
  }),
  CLEAR_SEARCH_DATA: ({ commit }) => new Promise((resolve) => {
    commit('clearSearchData')
    resolve()
  }),
  CLEAR_LIST_TYPE: ({ commit }) => new Promise((resolve) => {
    commit('clearListType')
    resolve()
  }),
  SET_SELECTED_CAT: ({ commit }, params) => new Promise((resolve) => {
    commit('setSelectedCat', params)
    resolve()
  }),
}
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
