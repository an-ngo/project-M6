import {Hobby} from './Hobby';

export class FormProvider{
  // private Long yearOfBirth;
  yearOfBirth?: number;
  // private String city;
  city?: string;
  // private String country;
  country?: string;
  // private List<String> serviceByProviderList;
  serviceByProviderList: string[];
  // private List<String> imageList;
  imageList: string[];
  // private String height;
  height?: string[];
  // private String weight;
  weight?: string[];
  // private List<Hobby> hobbyList;
  hobbyList: [Hobby];
  // private String description;
  description?: string;
  // private String conditions;
  conditions?: string;
  // private String link_facebook;
  linkFacebook?: string;
}
