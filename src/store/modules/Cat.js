const state = () => ({
  name: '',
  birthday: '',
  gender: 0, // TODO: Convert to Enum
  species: 0, // TODO: Convert to Enum
  kg: 0,
  introduce: '',
  whetherCatExist: false,
  catList: [],
})
const getters = {
  name: (state) => state.name,
  birthday: (state) => state.birthday,
  gender: (state) => state.gender,
  species: (state) => state.species,
  kg: (state) => state.kg,
  introduce: (state) => state.introduce,
  catList: (state) => state.catList,
  whetherCatExist: (state) => state.whetherCatExist,
}
const mutations = {
  setName(state, params) {
    state.name = params.name
  },
  setBirthday(state, params) {
    state.birthday = params.birthday
  },
  setGender(state, params) {
    state.gender = params.gender
  },
  setSpecies(state, params) {
    state.species = params.species
  },
  setKg(state, params) {
    state.kg = params.kg
  },
  setIntroduce(state, params) {
    state.introduce = params.introduce
  },
  setCatList(state, params) {
    state.catList = params.catList
    if (state.catList.length !== 0) {
      state.whetherCatExist = true
    } else {
      state.whetherCatExist = false
    }
  },
  setWhetherCatExist(state, params) {
    state.whetherCatExist = params.whetherCatExist
  },
}
const actions = {
  SET_NAME: ({ commit, params }) => new Promise((resolve) => {
    commit('setName', params)
    resolve()
  }),
  SET_BIRTHDAY: ({ commit, params }) => new Promise((resolve) => {
    commit('setBirthday', params)
    resolve()
  }),
  SET_GENDER: ({ commit, params }) => new Promise((resolve) => {
    commit('setGender', params)
    resolve()
  }),
  SET_SPECIES: ({ commit, params }) => new Promise((resolve) => {
    commit('setSpecies', params)
    resolve()
  }),
  SET_KG: ({ commit, params }) => new Promise((resolve) => {
    commit('setKg', params)
    resolve()
  }),
  SET_INTRODUCE: ({ commit, params }) => new Promise((resolve) => {
    commit('setIntroduce', params)
    resolve()
  }),
  GET_CAT_LIST: ({ commit, params }) => new Promise((resolve) => {
    // TODO: 고양이목록을 불러올 api 개발 예정
    commit('', params)
    resolve()
  }),
  APPLY_CAT_INFORMATION: ({ commit, params }) => new Promise((resolve) => {
    commit()
    console.log(params)
    // TODO: apply api 개발예정
    resolve()
  }),
  CHECK_CAT_EXIST: ({ commit, params }) => new Promise((resolve) => {
    commit()
    console.log(params)
    // TODO: 기존에 고양이를 등록한적이 있는지 없는지에 대한 api 개발예정
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
