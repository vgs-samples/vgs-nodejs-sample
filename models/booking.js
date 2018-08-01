module.exports = function(sequelize, Sequalize) {
  var BookingSchema = sequelize.define("Booking", {
      first_name: Sequalize.STRING,
      last_name: Sequalize.STRING,
      address: Sequalize.STRING,
      city: Sequalize.STRING,
      state: Sequalize.STRING,
      zip: Sequalize.STRING,
      cc_name: Sequalize.STRING,
      cc_number: Sequalize.STRING,
      cc_exp: Sequalize.STRING,
      cc_cvv: Sequalize.STRING
  },{
      timestamps: false
  });
  return BookingSchema;
}