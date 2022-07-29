  export interface IOurTeam {
    caption: string;
    designation: string;
    name: string;
    teamId: number;
    url: string;
  }

export interface IAmbGallery {
  id: number;
  ambassadorId: number;
  galleryId: number;
  imageurl: string;
}

export interface ISocialMedia {
  id: number;
  ambassadorId: number;
  socialId: number;
  link: string;
}

export interface IAmbassador {
  ambassadorGallery: IAmbGallery[];
  ambassadorId: number;
  ambassadorName: string;
  background: string;
  banner: string;
  dp: string;
  socialMedia: ISocialMedia[];
}

export interface ISupportTeam {
  caption: string;
  name: string;
  status: string;
  thanksId: number;
  url: string;
}

// InitialState
export interface IInitialState {
  ourTeam: IOurTeam[];
  ambassadorGallery: IAmbassador[];
  selectedUser: IAmbassador | null;
  addCrowdFunding: boolean;
  SupportTeam: ISupportTeam[];
}
