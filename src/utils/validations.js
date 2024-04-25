const defaultMobileNumRegex = /^[6|7|8|9]{1}[0-9]{9}$/;

const nameRegex = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;

const isEmailValid = (email) => {
    const emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // eslint-disable-line
    return emailReg.test(String(email).toLowerCase());
};

const isMobileValid = (number, customRegex) => {
    if (!number) return false;
    const numberRegex = customRegex || defaultMobileNumRegex;

    if (numberRegex && numberRegex.test) {
        return numberRegex.test(number);
    }

    return new RegExp(numberRegex).test(number);
};

const isInternationalMobileValid = (number) => {
    const regex = /^[+0-9][0-9]{9,20}$/; // Check that number only contains digits and may start with +
    return regex.test(number);
};

const isUserNameValid = (number) => {
    const numberRegex = /^[a-zA-Z0-9]{8,64}$/;
    return numberRegex.test(number);
};

const isGSTIDValid = (id) => {
    if (typeof id === 'undefined') { return false; }
    const gstReg = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/; // eslint-disable-line
    return gstReg.test(id);
};

const isCompanyValid = (company) => {
    if (typeof company === 'undefined') { return false; }
    return true;
    // TODO: Find a better regex for company name validation
};

const validateNameObject = (name) => {
    const error = {};

    const nameRegex = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;

    if (!name.first) {
        error.first = 'Title field cannot be empty';
    }

    else if (!name || (name.first && name.first.trim().length === 0) || !nameRegex.test(name.first)) {
        error.first = 'Invalid first name';
    }

    // if (!name || (name.last && name.last.trim().length === 0) || !nameRegex.test(name.last)) {
    //     error.last = 'Invalid last name';
    // }

    // Check for length (max length 32)
    else if (name && name.first && name.first.trim().length > 32) {
        error.first = 'Maximum length of first name is 32 characters';
    }

    // if (name && name.last && name.last.trim().length > 32) {
    //     error.last = 'Maximum length of last name is 32 characters';
    // }

    return error;
};

const validateFullName = (name) => {
    let error = '';

    const nameRegex = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
    if (!name) {
        error = 'Name cannot be empty';
    }

    else if (!name || !nameRegex.test(name)) {
        error = 'Invalid first name';
    }

    // Check for length (max length 32)
    else if (name && name.trim().length > 32) {
        error = 'Maximum length of first name is 32 characters';
    }

    return error;
};

const isNameValid = (name) => {
    if (!name || !nameRegex.test(name)) {
        return false;
    }
    return true;
};

const isPasswordValid = (password) => {
    const passRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
    return passRegex.test(password);
};

const isPNRValid = (pnr) => {
    const pnrRegex = /^[a-zA-Z0-9]{6}$/;
    return pnrRegex.test(pnr);
};

const isTicketNumberValid = (ticket) => {
    const ticketRegex = /^[0-9]{12}$/;
    return ticketRegex.test(ticket);
};

const isPanValid = (pan) => {
    const panRegex = /^([A-Z]){5}([0-9]){4}([A-Z]){1}?$/;
    return panRegex.test(pan);
};

const isDateOfBirthValid = (dateOfBirth) => {
    const currentDate = new Date();
    const dob = new Date(dateOfBirth);
    const dateDiff = (currentDate.getTime() - dob.getTime()) / (1000 * 60 * 60 * 24 * 365);
    const isValidDob = (dateDiff >= 13);
    return isValidDob;
};

const isPinCodeValid = (pincode) => {
    const pinCodeRegex = /^[1-9][0-9]{5}$/;
    return pinCodeRegex.test(pincode);
};

export default {
    isEmailValid,
    isCompanyValid,
    isGSTIDValid,
    isMobileValid,
    isInternationalMobileValid,
    validateNameObject,
    isPasswordValid,
    isUserNameValid,
    isPNRValid,
    defaultMobileNumRegex,
    isPanValid,
    isDateOfBirthValid,
    isPinCodeValid,
    isTicketNumberValid,
    isNameValid,
    validateFullName
};
