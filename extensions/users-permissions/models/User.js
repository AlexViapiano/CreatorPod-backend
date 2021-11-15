module.exports = {
  lifecycles: {
    async beforeCreate(data) {},
    async afterCreate(result, data) {
      if (result.creator) {
        console.log("Set user " + result.id + " to creator role!");
        strapi
          .query("user", "users-permissions")
          .update({ id: result.id }, { role: 3 });
      }
    },
  },
};
