// Field interfaces

export interface IdField<T = string> {
  id: T;
}

export interface StreetField {
  street: Street;
}

export interface CityField {
  city: City;
}

export interface FirstNameField {
  firstName: string;
}

export interface LastNameField {
  lastName: string;
}

export interface HouseNumberField {
  houseNumber: string;
}

export interface ApartmentNumberField {
  apartmentNumber: ApartmentNumber;
}

export interface KalpiField {
  kalpi: Kalpi;
}

export interface PersonalNameField {
  name: PersonalName;
}

export interface ManagerField {
  manager: Manager;
}

export interface PersonalDetailsField {
  personalDetails: PersonalDetails;
}

export interface AddressField {
  address: Address;
}

export interface PhoneNumberField {
  phone1: PhoneNumber;
  phone2: PhoneNumber;
  phone3: PhoneNumber;
}

export interface VotingStatusField {
  votingStatus: VotingStatus;
}

export interface EmailField {
  email: Email;
}

export interface TzField {
  tz: TZ;
}

export interface MachozField {
  machoz: Machoz;
}

export interface NumOfResultsField {
  numOfResults: number;
}

export interface NameField {
  name: string;
}

export interface UserRoleField {
  roles: UserRole[];
}

export interface SemelKalpiField {
  semel: SemelKalpi;
}

export interface JWTField {
  jwt: JWT;
}

export interface AuthSubjectField {
  authSubject: AuthSubject;
}

export interface AvatarUrlField {
  avatarUrl: AvatarUrl;
}

// Entity interfaces
export interface City extends IdField, NameField {}

export interface Street extends IdField, NameField {}

export type PhoneNumber = string;

export type AuthSubject = string;

export type VotingStatus = 'YES' | 'NO' | 'MAYBE' | 'IDK' | 'UNKNOWN';

export type UserRole = 'user' | 'admin';

export type Email = string;

export type JWT = string;

export type HouseNumber = string;

export type ApartmentNumber = string;

export type SemelKalpi = string;

export interface Location extends CityField, StreetField {}

export type TZ = string;

export type Machoz = string;

export type AvatarUrl = string;

export interface KalpiLocation extends Location {}

export interface LocationField<T> {
  location: T;
}

export interface Kalpi extends LocationField<KalpiLocation>, SemelKalpiField {}

export interface PersonalName extends FirstNameField, LastNameField {}

export interface PersonalDetails extends NameField, AddressField, EmailField {}

export interface Address
  extends CityField,
    StreetField,
    HouseNumberField,
    ApartmentNumberField {}

export interface Manager extends EmailField, NameField {}

export interface ElectorAddress
  extends StreetField,
    CityField,
    HouseNumberField,
    ApartmentNumberField {}

export interface ElectorForElectorDetailsPage
  extends IdField,
    PersonalDetailsField,
    AddressField,
    VotingStatusField,
    ManagerField {}

export interface ElectorForElectorSearchResult
  extends IdField,
    PersonalDetailsField,
    AddressField,
    VotingStatusField {}

export interface ElectorsSearchResult extends NumOfResultsField {
  electors: ElectorForElectorSearchResult[];
}

export interface SearchParameters
  extends FirstNameField,
    LastNameField,
    CityField,
    StreetField,
    ManagerField {
  oldSupportersOnly: boolean;
}

export interface User
  extends EmailField,
    TzField,
    FirstNameField,
    LastNameField,
    PhoneNumberField,
    MachozField {}
