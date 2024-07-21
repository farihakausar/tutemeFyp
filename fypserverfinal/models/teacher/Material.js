const mongoose = require('mongoose');

const materialSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['pdf', 'blog', 'video','note'],
    required: true
  },
  pptFile: {
    type: String,
    required: function () {
      return this.type === 'pdf';
    }
  },
  description: {
    type: String,
    required: function () {
      return this.type === 'blog';
    }
  },
  note: {
    type: String,
    required: function () {
      return this.type === 'blog';
    }
  },

  photo: {
    type: String,
    required: function () {
      return this.type === 'blog';
    }
  },
  url: {
    type: String,
    required: function () {
      return this.type === 'video';
    }
  },
  courseTitle: {
    type: String,
    // required: true
  },
  teacherServiceRequest: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'TeacherServiceRequest',
    required: true
  }
});

const Material = mongoose.model('Material', materialSchema);

module.exports = Material;
