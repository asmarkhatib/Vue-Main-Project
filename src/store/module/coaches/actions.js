export default {
  // registerCoach(context, data) {
  //   const userId = context.rootGetters.userId;
  //   const coachData = {
  //     firstName: data.first,
  //     lastName: data.last,
  //     description: data.desc,
  //     hourlyRate: data.rate,
  //     areas: data.areas,
  //   };

  //   fetch(
  //     `https://vue-http-demo-1d63b-default-rtdb.firebaseio.com/coaches/${userId}.json`,
  //     {
  //       method: 'PUT',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(coachData),
  //     }
  //   );
  //   context.commit('registerCoach', {
  //     ...coachData,
  //     id: userId,
  //   });
  // },

  async registerCoach(context, data) {
    const userId = context.rootGetters.userId;
    const coachData = {
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas,
    };

    const token = context.rootGetters.token;
    const response = await fetch(
      `https://vue-http-demo-1d63b-default-rtdb.firebaseio.com/coaches/${userId}.json?auth=` +
        token,
      {
        method: 'PUT',
        body: JSON.stringify(coachData),
      }
    );

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(
        responseData.message || 'Failed to fetch data...'
      );
      throw error;
    }

    context.commit('registerCoach', {
      ...coachData,
      id: userId,
    });
  },

  // loadCoaches(context) {
  //   fetch(
  //     'https://vue-http-demo-1d63b-default-rtdb.firebaseio.com/coaches.json'
  //   )
  //     .then((response) => {
  //       if (response.ok) {
  //         return response.json();
  //       }
  //     })
  //     .then((responseData) => {
  //       const coaches = [];

  //       for (const key in responseData) {
  //         const coach = {
  //           id: key,
  //           firstName: responseData[key].firstName,
  //           lastName: responseData[key].lastName,
  //           description: responseData[key].description,
  //           hourlyRate: responseData[key].hourlyRate,
  //           areas: responseData[key].areas,
  //         };
  //         coaches.push(coach);
  //       }
  //       context.commit('setCoaches', coaches);
  //     });
  // },

  async loadCoaches(context, payload) {
    if (!payload.forceRefresh && !context.getters.shouldUpdate) {
      return;
    }

    const response = await fetch(
      'https://vue-http-demo-1d63b-default-rtdb.firebaseio.com/coaches.json'
    );

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Something went wrong!');
      throw error;
    }

    const coaches = [];

    for (const key in responseData) {
      const coach = {
        id: key,
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        description: responseData[key].description,
        hourlyRate: responseData[key].hourlyRate,
        areas: responseData[key].areas,
      };
      coaches.push(coach);
    }
    context.commit('setCoaches', coaches);
  },
};
