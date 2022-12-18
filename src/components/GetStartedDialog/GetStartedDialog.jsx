import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import './GetStartedDialog.scss';

export const GetStartedDialog = ({ closeDialog }) => {
  const {
    register,
    handleSubmit,
    // getValues,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onBlur',
  });

  const [isAccept, setIsAccept] = useState(false);

  const onSubmit = () => {
    // const newMessage = {
    //   name: getValues('name'),
    //   email: getValues('email'),
    //   message: getValues('message'),
    //   id: +new Date(),
    // };

    // send Message to API //
    // export const postNewMessage = async (message) => {
    //   const response = await fetch(url, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       message,
    //     }),
    //   });

    //   return response.json();
    // };
    // postNewMessage(message);

    setIsAccept(true);
    reset();
    setTimeout(() => {
      setIsAccept(false);
    }, 3000);
  };

  return (
    <div className="GetStartedDialog">
      <button
        type="button"
        className="GetStartedDialog__close"
        onClick={() => closeDialog()}
      >
        <FontAwesomeIcon icon={faXmark} />
      </button>
      <p className="GetStartedDialog__name">Contact Form</p>
      <h2 className="GetStartedDialog__title">Drop Us a Line.</h2>
      <form
        method="dialog"
        className="GetStartedDialog__form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="GetStartedDialog__formEl">
          <label className="GetStartedDialog__label">
            <input
              type="text"
              className="GetStartedDialog__input"
              {...register('name', {
                required: 'Field is mandatory',
                minLength: {
                  value: 2,
                  message: 'The minimum number of characters in the name is 2',
                },
                pattern: {
                  message: 'Please enter valid name',
                },
              })}
              placeholder="First Name*"
            />
          </label>
          <div className="GetStartedDialog__errorBlock">
            {errors?.name && (
              errors?.name.message
            )}
          </div>
        </div>
        <div className="GetStartedDialog__formEl">
          <label className="GetStartedDialog__label">
            <input
              className="GetStartedDialog__input"
              type="email"
              placeholder="E-mail*"
              {...register('email', {
                required: 'Field is mandatory',
                pattern: {
                  value: /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/,
                  message: 'Please enter valid email',
                },
              })}
            />
          </label>
          <div className="GetStartedDialog__errorBlock">
            {errors?.email && (
              errors?.email.message
            )}
          </div>
        </div>
        <div className="GetStartedDialog__formEl">
          <label className="GetStartedDialog__label">
            <textarea
              className="GetStartedDialog__textArea"
              placeholder="Message..."
              name="message"
            />
          </label>
        </div>
        <button
          type="submit"
          className="GetStartedDialog__btn"
          disabled={!isValid}
        >
          Send a Message
        </button>
      </form>
      {isAccept && (
        <p className="GetStartedDialog__accept">
          Your application is accepted!
        </p>
      )}
    </div>
  );
};

GetStartedDialog.propTypes = {
  closeDialog: PropTypes.func.isRequired,
};
