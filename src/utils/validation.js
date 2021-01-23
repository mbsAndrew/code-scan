export const validationMsg = {
    system_capacity: (value) => {        
        if (value < 0.05 || value > 500000) {
            return "System Capacity must be between 0.05 and 500,000";
        }
        return false;
    },
    module_type: (value) => {        
        if (value < 0 || value > 2) {
            return "Please select a Module Type";
        }
        return false;
    },
    losses: (value) => {
        if (value < -5 || value > 99) {
            return "Losses must be between -5 and 99"
        }
        return false;
    },
    array_type: (value) => {
        if(value < 0 || value > 4) {
            return "Please select valid Array Type";
        }
        return false;
    },
    tilt: (value) => {
        if(value < 0 || value > 90) {
            return "Please enter tilt angle between 0 and 90 degrees";
        }
        return false;
    },
    azimuth: (value) => {
        if(value < 0 || value >= 360) {
            return "Azimuth select between 0 and 360 degrees";
        }
        return false;
    },
    address: (value) => {
        if (value === "") {
            return "Please enter valid address";
        }
        return false;
    }

};