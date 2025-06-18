import { useForm } from 'react-hook-form';
import '../styles/contactus.css'; // CSS file in same folder
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

  
function ContactUs() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch
  } = useForm();

  const onSubmit = (data) => {
    console.log('Form submitted:', data);
    // alert('Thank you! Your message has been received.');
    toast.success('Thank you! Your message has been submitted.');

    reset(); // reset the form
  };
  const issueType = watch('issueType')

  return (
    <div className="contact-page">
      <div className="contact-card">
        <h2 className="contact-title text-success">Contact Us</h2>
        <pre className="contact-subtitle lead">
          If you have any queries or suggestions,<br />
          feel free to connect with us!
        </pre>

        <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
          {/* Name */}
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              {...register('name', {
                required: 'Name is required',
                pattern: {
                  value: /^[A-Za-z\s]+$/,
                  message: 'Only letters and spaces are allowed',
                }

              })}
              placeholder="Your name"
            />
            {errors.name && <span className="error">{errors.name.message}</span>}
          </div>

          {/* Email */}
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Za-z]{2,}[A-Za-z0-9._%+-]*@(gmail|outlook|microsoft|github)\.com$/,
                  message: 'Enter a valid email',

                },
              })}
              placeholder="you@example.com"
            />
            {errors.email && <span className="error">{errors.email.message}</span>}
          </div>

          {/* Mobile */}
          <div className="form-group">
            <label>Mobile Number</label>
            <input
              type="tel"
              {...register('mobile', {
                required: 'Mobile number is required',
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: 'Enter a valid 10-digit number',
                },
              })}
              placeholder="e.g., 9876543210"
            />
            {errors.mobile && <span className="error">{errors.mobile.message}</span>}
          </div>

          {/* Gender */}
          <div className="form-group">
            <label>Gender</label>
            <select {...register('gender', { required: 'Gender is required' })}>
              <option value="">-- Select Gender --</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="prefer_not_say">Prefer not to say</option>
            </select>
            {errors.gender && <span className="error">{errors.gender.message}</span>}
          </div>

          {/* Issue Type */}
          <div className="form-group">
            <label>Issue Type</label>
            <select {...register('issueType', { required: 'Select an issue type' })}>
              <option value="">-- Select an issue --</option>
              <option value="booking">Booking Problem</option>
              <option value="payment">Payment Issue</option>
              <option value="room">Room Related</option>
              <option value="staff">Staff Feedback</option>
              <option value="other">Other</option>
            </select>
            {errors.issueType && <span className="error">{errors.issueType.message}</span>}
          </div>

          {/* Conditionally Show Textarea */}
          {issueType === 'other' && (
            <div className="form-group">
              <label>Describe Your Issue</label>
              <textarea
                {...register('message', { required: 'Please describe your issue' })}
                placeholder="Write your issue here..."
              ></textarea>
              {errors.message && <span className="error">{errors.message.message}</span>}
            </div>
          )}

          {/* Suggestions */}
          <div className="form-group">
            <label>Any suggestions to help us improve?</label>
            <textarea
              {...register('note')}
              placeholder="Optional feedback..."
            ></textarea>
          </div>

          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
      <ToastContainer/>
    </div>
  );
}

export default ContactUs;
