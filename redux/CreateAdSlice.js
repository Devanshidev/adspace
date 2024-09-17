import { createSlice } from '@reduxjs/toolkit';
import { FaBullhorn } from 'react-icons/fa';

const initialState = {
  form1: {
    community: "",
    name: "",
    objective: {
      name: "Brand awareness and reach",
      id: 1,
      description: "Increace awareness of your brand or product",
      options: ["Pay for CPM", "Otimized towards impression"],
      icon: <FaBullhorn />,
     },
    headline: "",
    description: "",
    actionAndUrl: {
      action: "",
      url: ""
    },
    file: null,
  },
  form2: {
    file: null,
    placements: [],
    estImpressions: '',
    estClicks: '',
    dailyOrWeekly: 'Daily',
    interestTags: [],
    communityTags: [],
    gender: 'All',
    ageGroup: 'All Age Group',
    location: [],
    startDate: '',
    endDate: '',
    totalBudget: '',
    dailyBudget: '',
    focusOn: 'Maximum Conversions',
    costPerAction: '',
  },
};

const CreateAdSlice = createSlice({
  name: 'createad',
  initialState,
  reducers: {
    setCommunity: (state, action) => {
      state.form1.community = action.payload;
    },
    setName: (state, action) => {
      state.form1.name = action.payload;
    },
    setObjective: (state, action) => {
      state.form1.objective = action.payload;
    },
    setHeadline: (state, action) => {
      state.form1.headline = action.payload;
    },
    setDescription: (state, action) => {
      state.form1.description = action.payload;
    },
    setActionAndUrl: (state, action) => {
      state.form1.actionAndUrl = action.payload;
    },
    setFile: (state, action) => {
      state.form1.file = action.payload;
    },
    setFile: (state, action) => {
      state.form2.file = action.payload;
    },
    setPlacements: (state, action) => {
      state.form2.placements = action.payload;
    },
    setEstImpressions: (state, action) => {
      state.form2.estImpressions = action.payload;
    },
    setEstClicks: (state, action) => {
      state.form2.estClicks = action.payload;
    },
    setDailyOrWeekly: (state, action) => {
      state.form2.dailyOrWeekly = action.payload;
    },
    setInterestTags: (state, action) => {
      state.form2.interestTags = action.payload;
    },
    setCommunityTags: (state, action) => {
      state.form2.communityTags = action.payload;
    },
    setGender: (state, action) => {
      state.form2.gender = action.payload;
    },
    setAgeGroup: (state, action) => {
      state.form2.ageGroup = action.payload;
    },
    setLocation: (state, action) => {
      state.form2.location = action.payload;
    },
    setStartDate: (state, action) => {
      state.form2.startDate = action.payload;
    },
    setEndDate: (state, action) => {
      state.form2.endDate = action.payload;
    },
    setTotalBudget: (state, action) => {
      state.form2.totalBudget = action.payload;
    },
    setDailyBudget: (state, action) => {
      state.form2.dailyBudget = action.payload;
    },
    setFocusOn: (state, action) => {
      state.form2.focusOn = action.payload;
    },
    setCostPerAction: (state, action) => {
      state.form2.costPerAction = action.payload;
    },
  }
});

export const { setCommunity, setName, setObjective, setHeadline, setDescription, setActionAndUrl, setFile , setPlacements, setDailyOrWeekly, setEstImpressions, setEstClicks, setGender, setAgeGroup, setLocation, setStartDate, setEndDate, setTotalBudget, setDailyBudget, setFocusOn, setCostPerAction, setInterestTags, setCommunityTags} = CreateAdSlice.actions; 
export default CreateAdSlice.reducer;
