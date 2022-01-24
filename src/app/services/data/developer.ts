export interface Developer  {
    _id:string,
    _busyPeriods: {from:string, to:string}[],
    name: string;
    email: string;
    phoneNumber: string;
    location :string;
    pricePerHour: number;
    technologies: string[];
    yearsOfExperience: number;
    nativeLanguage: string;

    description?: string;
    linkedinProfileLink?: string;
    profilePictureURL?: string;
  }