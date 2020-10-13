import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
  /** A time string with format: HH:mm:ss.SSS */
  Time: any;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `Long` scalar type represents 52-bit integers */
  Long: any;
};

export type Query = {
  __typename?: 'Query';
  contactForm?: Maybe<ContactForm>;
  faq?: Maybe<Faq>;
  faqs?: Maybe<Array<Maybe<Faq>>>;
  faqsConnection?: Maybe<FaqConnection>;
  home?: Maybe<Home>;
  photo?: Maybe<Photo>;
  photos?: Maybe<Array<Maybe<Photo>>>;
  photosConnection?: Maybe<PhotoConnection>;
  social?: Maybe<Social>;
  socials?: Maybe<Array<Maybe<Social>>>;
  socialsConnection?: Maybe<SocialConnection>;
  tag?: Maybe<Tag>;
  tags?: Maybe<Array<Maybe<Tag>>>;
  tagsConnection?: Maybe<TagConnection>;
  videoPage?: Maybe<VideoPage>;
  video?: Maybe<Video>;
  videos?: Maybe<Array<Maybe<Video>>>;
  videosConnection?: Maybe<VideoConnection>;
  files?: Maybe<Array<Maybe<UploadFile>>>;
  filesConnection?: Maybe<UploadFileConnection>;
  role?: Maybe<UsersPermissionsRole>;
  /** Retrieve all the existing roles. You can't apply filters on this query. */
  roles?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  rolesConnection?: Maybe<UsersPermissionsRoleConnection>;
  user?: Maybe<UsersPermissionsUser>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  usersConnection?: Maybe<UsersPermissionsUserConnection>;
  photosCountPublished: Scalars['Int'];
  videosCountPublished: Scalars['Int'];
  me?: Maybe<UsersPermissionsMe>;
};


export type QueryFaqArgs = {
  id: Scalars['ID'];
};


export type QueryFaqsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryFaqsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryPhotoArgs = {
  id: Scalars['ID'];
};


export type QueryPhotosArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryPhotosConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QuerySocialArgs = {
  id: Scalars['ID'];
};


export type QuerySocialsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QuerySocialsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryTagArgs = {
  id: Scalars['ID'];
};


export type QueryTagsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryTagsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryVideoArgs = {
  id: Scalars['ID'];
};


export type QueryVideosArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryVideosConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryFilesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryFilesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryRoleArgs = {
  id: Scalars['ID'];
};


export type QueryRolesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryRolesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QueryUsersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryUsersConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryPhotosCountPublishedArgs = {
  tagName?: Maybe<Scalars['String']>;
};


export type QueryVideosCountPublishedArgs = {
  tagName?: Maybe<Scalars['String']>;
};

export type ContactForm = {
  __typename?: 'ContactForm';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  email: Scalars['String'];
  body?: Maybe<Scalars['String']>;
  subject?: Maybe<Scalars['String']>;
  styles?: Maybe<Array<Maybe<ComponentContantFormStyleContantFormStyle>>>;
  agreement: Scalars['String'];
  placeholders?: Maybe<Array<Maybe<ComponentContactFormPlaceholdersContactFormPlaceholders>>>;
};


export type ComponentContantFormStyleContantFormStyle = {
  __typename?: 'ComponentContantFormStyleContantFormStyle';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type ComponentContactFormPlaceholdersContactFormPlaceholders = {
  __typename?: 'ComponentContactFormPlaceholdersContactFormPlaceholders';
  id: Scalars['ID'];
  field: Scalars['String'];
  placeholder: Scalars['String'];
};

export type Faq = {
  __typename?: 'Faq';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  question: Scalars['String'];
  answer: Scalars['String'];
  isPublished: Scalars['Boolean'];
  publishedAt?: Maybe<Scalars['DateTime']>;
};


export type FaqConnection = {
  __typename?: 'FaqConnection';
  values?: Maybe<Array<Maybe<Faq>>>;
  groupBy?: Maybe<FaqGroupBy>;
  aggregate?: Maybe<FaqAggregator>;
};

export type FaqGroupBy = {
  __typename?: 'FaqGroupBy';
  id?: Maybe<Array<Maybe<FaqConnectionId>>>;
  created_at?: Maybe<Array<Maybe<FaqConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<FaqConnectionUpdated_At>>>;
  question?: Maybe<Array<Maybe<FaqConnectionQuestion>>>;
  answer?: Maybe<Array<Maybe<FaqConnectionAnswer>>>;
  isPublished?: Maybe<Array<Maybe<FaqConnectionIsPublished>>>;
  publishedAt?: Maybe<Array<Maybe<FaqConnectionPublishedAt>>>;
};

export type FaqConnectionId = {
  __typename?: 'FaqConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<FaqConnection>;
};

export type FaqConnectionCreated_At = {
  __typename?: 'FaqConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<FaqConnection>;
};

export type FaqConnectionUpdated_At = {
  __typename?: 'FaqConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<FaqConnection>;
};

export type FaqConnectionQuestion = {
  __typename?: 'FaqConnectionQuestion';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<FaqConnection>;
};

export type FaqConnectionAnswer = {
  __typename?: 'FaqConnectionAnswer';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<FaqConnection>;
};

export type FaqConnectionIsPublished = {
  __typename?: 'FaqConnectionIsPublished';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<FaqConnection>;
};

export type FaqConnectionPublishedAt = {
  __typename?: 'FaqConnectionPublishedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<FaqConnection>;
};

export type FaqAggregator = {
  __typename?: 'FaqAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type Home = {
  __typename?: 'Home';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  aboutUsContent: Scalars['String'];
  contactContent: Scalars['String'];
  aboutUsImage?: Maybe<UploadFile>;
  backgroundImage?: Maybe<UploadFile>;
  backgroundVideo?: Maybe<UploadFile>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name: Scalars['String'];
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  ext?: Maybe<Scalars['String']>;
  mime: Scalars['String'];
  size: Scalars['Float'];
  url: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Morph>>>;
};


export type UploadFileRelatedArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type Morph = UsersPermissionsMe | UsersPermissionsMeRole | UsersPermissionsLoginPayload | UserPermissionsPasswordPayload | ContactForm | UpdateContactFormPayload | DeleteContactFormPayload | Faq | FaqConnection | FaqAggregator | FaqGroupBy | FaqConnectionId | FaqConnectionCreated_At | FaqConnectionUpdated_At | FaqConnectionQuestion | FaqConnectionAnswer | FaqConnectionIsPublished | FaqConnectionPublishedAt | CreateFaqPayload | UpdateFaqPayload | DeleteFaqPayload | Home | UpdateHomePayload | DeleteHomePayload | Photo | PhotoConnection | PhotoAggregator | PhotoGroupBy | PhotoConnectionId | PhotoConnectionCreated_At | PhotoConnectionUpdated_At | PhotoConnectionTitle | PhotoConnectionIsPublished | PhotoConnectionPublishedAt | PhotoConnectionImage | CreatePhotoPayload | UpdatePhotoPayload | DeletePhotoPayload | Social | SocialConnection | SocialAggregator | SocialGroupBy | SocialConnectionId | SocialConnectionCreated_At | SocialConnectionUpdated_At | SocialConnectionUrl | SocialConnectionIcon | SocialConnectionIsPublished | SocialConnectionPublishedAt | SocialConnectionLabel | SocialConnectionColorHex | CreateSocialPayload | UpdateSocialPayload | DeleteSocialPayload | Tag | TagConnection | TagAggregator | TagGroupBy | TagConnectionId | TagConnectionCreated_At | TagConnectionUpdated_At | TagConnectionName | CreateTagPayload | UpdateTagPayload | DeleteTagPayload | VideoPage | UpdateVideoPagePayload | DeleteVideoPagePayload | Video | VideoConnection | VideoAggregator | VideoGroupBy | VideoConnectionId | VideoConnectionCreated_At | VideoConnectionUpdated_At | VideoConnectionUrl | VideoConnectionTitle | VideoConnectionDescription | VideoConnectionIsPublished | VideoConnectionPublishedAt | VideoConnectionThumbnail | CreateVideoPayload | UpdateVideoPayload | DeleteVideoPayload | UploadFile | UploadFileConnection | UploadFileAggregator | UploadFileAggregatorSum | UploadFileAggregatorAvg | UploadFileAggregatorMin | UploadFileAggregatorMax | UploadFileGroupBy | UploadFileConnectionId | UploadFileConnectionCreated_At | UploadFileConnectionUpdated_At | UploadFileConnectionName | UploadFileConnectionAlternativeText | UploadFileConnectionCaption | UploadFileConnectionWidth | UploadFileConnectionHeight | UploadFileConnectionFormats | UploadFileConnectionHash | UploadFileConnectionExt | UploadFileConnectionMime | UploadFileConnectionSize | UploadFileConnectionUrl | UploadFileConnectionPreviewUrl | UploadFileConnectionProvider | UploadFileConnectionProvider_Metadata | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsRoleConnection | UsersPermissionsRoleAggregator | UsersPermissionsRoleGroupBy | UsersPermissionsRoleConnectionId | UsersPermissionsRoleConnectionName | UsersPermissionsRoleConnectionDescription | UsersPermissionsRoleConnectionType | CreateRolePayload | UpdateRolePayload | DeleteRolePayload | UsersPermissionsUser | UsersPermissionsUserConnection | UsersPermissionsUserAggregator | UsersPermissionsUserGroupBy | UsersPermissionsUserConnectionId | UsersPermissionsUserConnectionCreated_At | UsersPermissionsUserConnectionUpdated_At | UsersPermissionsUserConnectionUsername | UsersPermissionsUserConnectionEmail | UsersPermissionsUserConnectionProvider | UsersPermissionsUserConnectionConfirmed | UsersPermissionsUserConnectionBlocked | UsersPermissionsUserConnectionRole | CreateUserPayload | UpdateUserPayload | DeleteUserPayload | ComponentContactFormPlaceholdersContactFormPlaceholders | ComponentContantFormStyleContantFormStyle | ComponentTagTags;

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  id: Scalars['ID'];
  username: Scalars['String'];
  email: Scalars['String'];
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<UsersPermissionsMeRole>;
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UserPermissionsPasswordPayload = {
  __typename?: 'UserPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type UpdateContactFormPayload = {
  __typename?: 'updateContactFormPayload';
  contactForm?: Maybe<ContactForm>;
};

export type DeleteContactFormPayload = {
  __typename?: 'deleteContactFormPayload';
  contactForm?: Maybe<ContactForm>;
};

export type CreateFaqPayload = {
  __typename?: 'createFaqPayload';
  faq?: Maybe<Faq>;
};

export type UpdateFaqPayload = {
  __typename?: 'updateFaqPayload';
  faq?: Maybe<Faq>;
};

export type DeleteFaqPayload = {
  __typename?: 'deleteFaqPayload';
  faq?: Maybe<Faq>;
};

export type UpdateHomePayload = {
  __typename?: 'updateHomePayload';
  home?: Maybe<Home>;
};

export type DeleteHomePayload = {
  __typename?: 'deleteHomePayload';
  home?: Maybe<Home>;
};

export type Photo = {
  __typename?: 'Photo';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  title: Scalars['String'];
  isPublished: Scalars['Boolean'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  image?: Maybe<UploadFile>;
};

export type PhotoConnection = {
  __typename?: 'PhotoConnection';
  values?: Maybe<Array<Maybe<Photo>>>;
  groupBy?: Maybe<PhotoGroupBy>;
  aggregate?: Maybe<PhotoAggregator>;
};

export type PhotoGroupBy = {
  __typename?: 'PhotoGroupBy';
  id?: Maybe<Array<Maybe<PhotoConnectionId>>>;
  created_at?: Maybe<Array<Maybe<PhotoConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<PhotoConnectionUpdated_At>>>;
  title?: Maybe<Array<Maybe<PhotoConnectionTitle>>>;
  isPublished?: Maybe<Array<Maybe<PhotoConnectionIsPublished>>>;
  publishedAt?: Maybe<Array<Maybe<PhotoConnectionPublishedAt>>>;
  image?: Maybe<Array<Maybe<PhotoConnectionImage>>>;
};

export type PhotoConnectionId = {
  __typename?: 'PhotoConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<PhotoConnection>;
};

export type PhotoConnectionCreated_At = {
  __typename?: 'PhotoConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<PhotoConnection>;
};

export type PhotoConnectionUpdated_At = {
  __typename?: 'PhotoConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<PhotoConnection>;
};

export type PhotoConnectionTitle = {
  __typename?: 'PhotoConnectionTitle';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<PhotoConnection>;
};

export type PhotoConnectionIsPublished = {
  __typename?: 'PhotoConnectionIsPublished';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<PhotoConnection>;
};

export type PhotoConnectionPublishedAt = {
  __typename?: 'PhotoConnectionPublishedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<PhotoConnection>;
};

export type PhotoConnectionImage = {
  __typename?: 'PhotoConnectionImage';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<PhotoConnection>;
};

export type PhotoAggregator = {
  __typename?: 'PhotoAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CreatePhotoPayload = {
  __typename?: 'createPhotoPayload';
  photo?: Maybe<Photo>;
};

export type UpdatePhotoPayload = {
  __typename?: 'updatePhotoPayload';
  photo?: Maybe<Photo>;
};

export type DeletePhotoPayload = {
  __typename?: 'deletePhotoPayload';
  photo?: Maybe<Photo>;
};

export type Social = {
  __typename?: 'Social';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  url: Scalars['String'];
  icon: Scalars['String'];
  isPublished: Scalars['Boolean'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  label: Scalars['String'];
  colorHex?: Maybe<Scalars['String']>;
};

export type SocialConnection = {
  __typename?: 'SocialConnection';
  values?: Maybe<Array<Maybe<Social>>>;
  groupBy?: Maybe<SocialGroupBy>;
  aggregate?: Maybe<SocialAggregator>;
};

export type SocialGroupBy = {
  __typename?: 'SocialGroupBy';
  id?: Maybe<Array<Maybe<SocialConnectionId>>>;
  created_at?: Maybe<Array<Maybe<SocialConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<SocialConnectionUpdated_At>>>;
  url?: Maybe<Array<Maybe<SocialConnectionUrl>>>;
  icon?: Maybe<Array<Maybe<SocialConnectionIcon>>>;
  isPublished?: Maybe<Array<Maybe<SocialConnectionIsPublished>>>;
  publishedAt?: Maybe<Array<Maybe<SocialConnectionPublishedAt>>>;
  label?: Maybe<Array<Maybe<SocialConnectionLabel>>>;
  colorHex?: Maybe<Array<Maybe<SocialConnectionColorHex>>>;
};

export type SocialConnectionId = {
  __typename?: 'SocialConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<SocialConnection>;
};

export type SocialConnectionCreated_At = {
  __typename?: 'SocialConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<SocialConnection>;
};

export type SocialConnectionUpdated_At = {
  __typename?: 'SocialConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<SocialConnection>;
};

export type SocialConnectionUrl = {
  __typename?: 'SocialConnectionUrl';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<SocialConnection>;
};

export type SocialConnectionIcon = {
  __typename?: 'SocialConnectionIcon';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<SocialConnection>;
};

export type SocialConnectionIsPublished = {
  __typename?: 'SocialConnectionIsPublished';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<SocialConnection>;
};

export type SocialConnectionPublishedAt = {
  __typename?: 'SocialConnectionPublishedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<SocialConnection>;
};

export type SocialConnectionLabel = {
  __typename?: 'SocialConnectionLabel';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<SocialConnection>;
};

export type SocialConnectionColorHex = {
  __typename?: 'SocialConnectionColorHex';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<SocialConnection>;
};

export type SocialAggregator = {
  __typename?: 'SocialAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CreateSocialPayload = {
  __typename?: 'createSocialPayload';
  social?: Maybe<Social>;
};

export type UpdateSocialPayload = {
  __typename?: 'updateSocialPayload';
  social?: Maybe<Social>;
};

export type DeleteSocialPayload = {
  __typename?: 'deleteSocialPayload';
  social?: Maybe<Social>;
};

export type Tag = {
  __typename?: 'Tag';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name: Scalars['String'];
  videos?: Maybe<Array<Maybe<Video>>>;
};


export type TagVideosArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type Video = {
  __typename?: 'Video';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  url: Scalars['String'];
  title: Scalars['String'];
  description: Scalars['String'];
  isPublished: Scalars['Boolean'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  thumbnail?: Maybe<UploadFile>;
  tags?: Maybe<Array<Maybe<Tag>>>;
};


export type VideoTagsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type TagConnection = {
  __typename?: 'TagConnection';
  values?: Maybe<Array<Maybe<Tag>>>;
  groupBy?: Maybe<TagGroupBy>;
  aggregate?: Maybe<TagAggregator>;
};

export type TagGroupBy = {
  __typename?: 'TagGroupBy';
  id?: Maybe<Array<Maybe<TagConnectionId>>>;
  created_at?: Maybe<Array<Maybe<TagConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<TagConnectionUpdated_At>>>;
  name?: Maybe<Array<Maybe<TagConnectionName>>>;
};

export type TagConnectionId = {
  __typename?: 'TagConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<TagConnection>;
};

export type TagConnectionCreated_At = {
  __typename?: 'TagConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<TagConnection>;
};

export type TagConnectionUpdated_At = {
  __typename?: 'TagConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<TagConnection>;
};

export type TagConnectionName = {
  __typename?: 'TagConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<TagConnection>;
};

export type TagAggregator = {
  __typename?: 'TagAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CreateTagPayload = {
  __typename?: 'createTagPayload';
  tag?: Maybe<Tag>;
};

export type UpdateTagPayload = {
  __typename?: 'updateTagPayload';
  tag?: Maybe<Tag>;
};

export type DeleteTagPayload = {
  __typename?: 'deleteTagPayload';
  tag?: Maybe<Tag>;
};

export type VideoPage = {
  __typename?: 'VideoPage';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  image?: Maybe<UploadFile>;
};

export type UpdateVideoPagePayload = {
  __typename?: 'updateVideoPagePayload';
  videoPage?: Maybe<VideoPage>;
};

export type DeleteVideoPagePayload = {
  __typename?: 'deleteVideoPagePayload';
  videoPage?: Maybe<VideoPage>;
};

export type VideoConnection = {
  __typename?: 'VideoConnection';
  values?: Maybe<Array<Maybe<Video>>>;
  groupBy?: Maybe<VideoGroupBy>;
  aggregate?: Maybe<VideoAggregator>;
};

export type VideoGroupBy = {
  __typename?: 'VideoGroupBy';
  id?: Maybe<Array<Maybe<VideoConnectionId>>>;
  created_at?: Maybe<Array<Maybe<VideoConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<VideoConnectionUpdated_At>>>;
  url?: Maybe<Array<Maybe<VideoConnectionUrl>>>;
  title?: Maybe<Array<Maybe<VideoConnectionTitle>>>;
  description?: Maybe<Array<Maybe<VideoConnectionDescription>>>;
  isPublished?: Maybe<Array<Maybe<VideoConnectionIsPublished>>>;
  publishedAt?: Maybe<Array<Maybe<VideoConnectionPublishedAt>>>;
  thumbnail?: Maybe<Array<Maybe<VideoConnectionThumbnail>>>;
};

export type VideoConnectionId = {
  __typename?: 'VideoConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<VideoConnection>;
};

export type VideoConnectionCreated_At = {
  __typename?: 'VideoConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<VideoConnection>;
};

export type VideoConnectionUpdated_At = {
  __typename?: 'VideoConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<VideoConnection>;
};

export type VideoConnectionUrl = {
  __typename?: 'VideoConnectionUrl';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<VideoConnection>;
};

export type VideoConnectionTitle = {
  __typename?: 'VideoConnectionTitle';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<VideoConnection>;
};

export type VideoConnectionDescription = {
  __typename?: 'VideoConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<VideoConnection>;
};

export type VideoConnectionIsPublished = {
  __typename?: 'VideoConnectionIsPublished';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<VideoConnection>;
};

export type VideoConnectionPublishedAt = {
  __typename?: 'VideoConnectionPublishedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<VideoConnection>;
};

export type VideoConnectionThumbnail = {
  __typename?: 'VideoConnectionThumbnail';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<VideoConnection>;
};

export type VideoAggregator = {
  __typename?: 'VideoAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CreateVideoPayload = {
  __typename?: 'createVideoPayload';
  video?: Maybe<Video>;
};

export type UpdateVideoPayload = {
  __typename?: 'updateVideoPayload';
  video?: Maybe<Video>;
};

export type DeleteVideoPayload = {
  __typename?: 'deleteVideoPayload';
  video?: Maybe<Video>;
};

export type UploadFileConnection = {
  __typename?: 'UploadFileConnection';
  values?: Maybe<Array<Maybe<UploadFile>>>;
  groupBy?: Maybe<UploadFileGroupBy>;
  aggregate?: Maybe<UploadFileAggregator>;
};

export type UploadFileGroupBy = {
  __typename?: 'UploadFileGroupBy';
  id?: Maybe<Array<Maybe<UploadFileConnectionId>>>;
  created_at?: Maybe<Array<Maybe<UploadFileConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<UploadFileConnectionUpdated_At>>>;
  name?: Maybe<Array<Maybe<UploadFileConnectionName>>>;
  alternativeText?: Maybe<Array<Maybe<UploadFileConnectionAlternativeText>>>;
  caption?: Maybe<Array<Maybe<UploadFileConnectionCaption>>>;
  width?: Maybe<Array<Maybe<UploadFileConnectionWidth>>>;
  height?: Maybe<Array<Maybe<UploadFileConnectionHeight>>>;
  formats?: Maybe<Array<Maybe<UploadFileConnectionFormats>>>;
  hash?: Maybe<Array<Maybe<UploadFileConnectionHash>>>;
  ext?: Maybe<Array<Maybe<UploadFileConnectionExt>>>;
  mime?: Maybe<Array<Maybe<UploadFileConnectionMime>>>;
  size?: Maybe<Array<Maybe<UploadFileConnectionSize>>>;
  url?: Maybe<Array<Maybe<UploadFileConnectionUrl>>>;
  previewUrl?: Maybe<Array<Maybe<UploadFileConnectionPreviewUrl>>>;
  provider?: Maybe<Array<Maybe<UploadFileConnectionProvider>>>;
  provider_metadata?: Maybe<Array<Maybe<UploadFileConnectionProvider_Metadata>>>;
};

export type UploadFileConnectionId = {
  __typename?: 'UploadFileConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCreated_At = {
  __typename?: 'UploadFileConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUpdated_At = {
  __typename?: 'UploadFileConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionName = {
  __typename?: 'UploadFileConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionAlternativeText = {
  __typename?: 'UploadFileConnectionAlternativeText';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCaption = {
  __typename?: 'UploadFileConnectionCaption';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionWidth = {
  __typename?: 'UploadFileConnectionWidth';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionHeight = {
  __typename?: 'UploadFileConnectionHeight';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionFormats = {
  __typename?: 'UploadFileConnectionFormats';
  key?: Maybe<Scalars['JSON']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionHash = {
  __typename?: 'UploadFileConnectionHash';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionExt = {
  __typename?: 'UploadFileConnectionExt';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionMime = {
  __typename?: 'UploadFileConnectionMime';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionSize = {
  __typename?: 'UploadFileConnectionSize';
  key?: Maybe<Scalars['Float']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUrl = {
  __typename?: 'UploadFileConnectionUrl';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionPreviewUrl = {
  __typename?: 'UploadFileConnectionPreviewUrl';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionProvider = {
  __typename?: 'UploadFileConnectionProvider';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionProvider_Metadata = {
  __typename?: 'UploadFileConnectionProvider_metadata';
  key?: Maybe<Scalars['JSON']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileAggregator = {
  __typename?: 'UploadFileAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<UploadFileAggregatorSum>;
  avg?: Maybe<UploadFileAggregatorAvg>;
  min?: Maybe<UploadFileAggregatorMin>;
  max?: Maybe<UploadFileAggregatorMax>;
};

export type UploadFileAggregatorSum = {
  __typename?: 'UploadFileAggregatorSum';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorAvg = {
  __typename?: 'UploadFileAggregatorAvg';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMin = {
  __typename?: 'UploadFileAggregatorMin';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMax = {
  __typename?: 'UploadFileAggregatorMax';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  id: Scalars['ID'];
  type: Scalars['String'];
  controller: Scalars['String'];
  action: Scalars['String'];
  enabled: Scalars['Boolean'];
  policy?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<UsersPermissionsPermission>>>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};


export type UsersPermissionsRolePermissionsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type UsersPermissionsRoleUsersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  username: Scalars['String'];
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsRoleConnection = {
  __typename?: 'UsersPermissionsRoleConnection';
  values?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  groupBy?: Maybe<UsersPermissionsRoleGroupBy>;
  aggregate?: Maybe<UsersPermissionsRoleAggregator>;
};

export type UsersPermissionsRoleGroupBy = {
  __typename?: 'UsersPermissionsRoleGroupBy';
  id?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionId>>>;
  name?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionName>>>;
  description?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionDescription>>>;
  type?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionType>>>;
};

export type UsersPermissionsRoleConnectionId = {
  __typename?: 'UsersPermissionsRoleConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionName = {
  __typename?: 'UsersPermissionsRoleConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionDescription = {
  __typename?: 'UsersPermissionsRoleConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionType = {
  __typename?: 'UsersPermissionsRoleConnectionType';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleAggregator = {
  __typename?: 'UsersPermissionsRoleAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CreateRolePayload = {
  __typename?: 'createRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type UpdateRolePayload = {
  __typename?: 'updateRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type DeleteRolePayload = {
  __typename?: 'deleteRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsUserConnection = {
  __typename?: 'UsersPermissionsUserConnection';
  values?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  groupBy?: Maybe<UsersPermissionsUserGroupBy>;
  aggregate?: Maybe<UsersPermissionsUserAggregator>;
};

export type UsersPermissionsUserGroupBy = {
  __typename?: 'UsersPermissionsUserGroupBy';
  id?: Maybe<Array<Maybe<UsersPermissionsUserConnectionId>>>;
  created_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUpdated_At>>>;
  username?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUsername>>>;
  email?: Maybe<Array<Maybe<UsersPermissionsUserConnectionEmail>>>;
  provider?: Maybe<Array<Maybe<UsersPermissionsUserConnectionProvider>>>;
  confirmed?: Maybe<Array<Maybe<UsersPermissionsUserConnectionConfirmed>>>;
  blocked?: Maybe<Array<Maybe<UsersPermissionsUserConnectionBlocked>>>;
  role?: Maybe<Array<Maybe<UsersPermissionsUserConnectionRole>>>;
};

export type UsersPermissionsUserConnectionId = {
  __typename?: 'UsersPermissionsUserConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionCreated_At = {
  __typename?: 'UsersPermissionsUserConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUpdated_At = {
  __typename?: 'UsersPermissionsUserConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUsername = {
  __typename?: 'UsersPermissionsUserConnectionUsername';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionEmail = {
  __typename?: 'UsersPermissionsUserConnectionEmail';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionProvider = {
  __typename?: 'UsersPermissionsUserConnectionProvider';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionConfirmed = {
  __typename?: 'UsersPermissionsUserConnectionConfirmed';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionBlocked = {
  __typename?: 'UsersPermissionsUserConnectionBlocked';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionRole = {
  __typename?: 'UsersPermissionsUserConnectionRole';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserAggregator = {
  __typename?: 'UsersPermissionsUserAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CreateUserPayload = {
  __typename?: 'createUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type UpdateUserPayload = {
  __typename?: 'updateUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type DeleteUserPayload = {
  __typename?: 'deleteUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type ComponentTagTags = {
  __typename?: 'ComponentTagTags';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  updateContactForm?: Maybe<UpdateContactFormPayload>;
  deleteContactForm?: Maybe<DeleteContactFormPayload>;
  createFaq?: Maybe<CreateFaqPayload>;
  updateFaq?: Maybe<UpdateFaqPayload>;
  deleteFaq?: Maybe<DeleteFaqPayload>;
  updateHome?: Maybe<UpdateHomePayload>;
  deleteHome?: Maybe<DeleteHomePayload>;
  createPhoto?: Maybe<CreatePhotoPayload>;
  updatePhoto?: Maybe<UpdatePhotoPayload>;
  deletePhoto?: Maybe<DeletePhotoPayload>;
  createSocial?: Maybe<CreateSocialPayload>;
  updateSocial?: Maybe<UpdateSocialPayload>;
  deleteSocial?: Maybe<DeleteSocialPayload>;
  createTag?: Maybe<CreateTagPayload>;
  updateTag?: Maybe<UpdateTagPayload>;
  deleteTag?: Maybe<DeleteTagPayload>;
  updateVideoPage?: Maybe<UpdateVideoPagePayload>;
  deleteVideoPage?: Maybe<DeleteVideoPagePayload>;
  createVideo?: Maybe<CreateVideoPayload>;
  updateVideo?: Maybe<UpdateVideoPayload>;
  deleteVideo?: Maybe<DeleteVideoPayload>;
  /** Create a new role */
  createRole?: Maybe<CreateRolePayload>;
  /** Update an existing role */
  updateRole?: Maybe<UpdateRolePayload>;
  /** Delete an existing role */
  deleteRole?: Maybe<DeleteRolePayload>;
  /** Create a new user */
  createUser?: Maybe<CreateUserPayload>;
  /** Update an existing user */
  updateUser?: Maybe<UpdateUserPayload>;
  /** Delete an existing user */
  deleteUser?: Maybe<DeleteUserPayload>;
  upload: UploadFile;
  multipleUpload: Array<Maybe<UploadFile>>;
  updateFileInfo: UploadFile;
  login: UsersPermissionsLoginPayload;
  register: UsersPermissionsLoginPayload;
  forgotPassword?: Maybe<UserPermissionsPasswordPayload>;
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  sendEmail: Scalars['Boolean'];
};


export type MutationUpdateContactFormArgs = {
  input?: Maybe<UpdateContactFormInput>;
};


export type MutationCreateFaqArgs = {
  input?: Maybe<CreateFaqInput>;
};


export type MutationUpdateFaqArgs = {
  input?: Maybe<UpdateFaqInput>;
};


export type MutationDeleteFaqArgs = {
  input?: Maybe<DeleteFaqInput>;
};


export type MutationUpdateHomeArgs = {
  input?: Maybe<UpdateHomeInput>;
};


export type MutationCreatePhotoArgs = {
  input?: Maybe<CreatePhotoInput>;
};


export type MutationUpdatePhotoArgs = {
  input?: Maybe<UpdatePhotoInput>;
};


export type MutationDeletePhotoArgs = {
  input?: Maybe<DeletePhotoInput>;
};


export type MutationCreateSocialArgs = {
  input?: Maybe<CreateSocialInput>;
};


export type MutationUpdateSocialArgs = {
  input?: Maybe<UpdateSocialInput>;
};


export type MutationDeleteSocialArgs = {
  input?: Maybe<DeleteSocialInput>;
};


export type MutationCreateTagArgs = {
  input?: Maybe<CreateTagInput>;
};


export type MutationUpdateTagArgs = {
  input?: Maybe<UpdateTagInput>;
};


export type MutationDeleteTagArgs = {
  input?: Maybe<DeleteTagInput>;
};


export type MutationUpdateVideoPageArgs = {
  input?: Maybe<UpdateVideoPageInput>;
};


export type MutationCreateVideoArgs = {
  input?: Maybe<CreateVideoInput>;
};


export type MutationUpdateVideoArgs = {
  input?: Maybe<UpdateVideoInput>;
};


export type MutationDeleteVideoArgs = {
  input?: Maybe<DeleteVideoInput>;
};


export type MutationCreateRoleArgs = {
  input?: Maybe<CreateRoleInput>;
};


export type MutationUpdateRoleArgs = {
  input?: Maybe<UpdateRoleInput>;
};


export type MutationDeleteRoleArgs = {
  input?: Maybe<DeleteRoleInput>;
};


export type MutationCreateUserArgs = {
  input?: Maybe<CreateUserInput>;
};


export type MutationUpdateUserArgs = {
  input?: Maybe<UpdateUserInput>;
};


export type MutationDeleteUserArgs = {
  input?: Maybe<DeleteUserInput>;
};


export type MutationUploadArgs = {
  refId?: Maybe<Scalars['ID']>;
  ref?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  file: Scalars['Upload'];
};


export type MutationMultipleUploadArgs = {
  refId?: Maybe<Scalars['ID']>;
  ref?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  files: Array<Maybe<Scalars['Upload']>>;
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info: FileInfoInput;
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationResetPasswordArgs = {
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
  code: Scalars['String'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};


export type MutationSendEmailArgs = {
  options: EmailOptions;
};

export type UpdateContactFormInput = {
  data?: Maybe<EditContactFormInput>;
};

export type EditContactFormInput = {
  email?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  subject?: Maybe<Scalars['String']>;
  styles?: Maybe<Array<Maybe<EditComponentContantFormStyleContantFormStyleInput>>>;
  agreement?: Maybe<Scalars['String']>;
  placeholders?: Maybe<Array<Maybe<EditComponentContactFormPlaceholdersContactFormPlaceholderInput>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditComponentContantFormStyleContantFormStyleInput = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type EditComponentContactFormPlaceholdersContactFormPlaceholderInput = {
  id?: Maybe<Scalars['ID']>;
  field?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type CreateFaqInput = {
  data?: Maybe<FaqInput>;
};

export type FaqInput = {
  question: Scalars['String'];
  answer: Scalars['String'];
  isPublished?: Maybe<Scalars['Boolean']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UpdateFaqInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditFaqInput>;
};

export type InputId = {
  id: Scalars['ID'];
};

export type EditFaqInput = {
  question?: Maybe<Scalars['String']>;
  answer?: Maybe<Scalars['String']>;
  isPublished?: Maybe<Scalars['Boolean']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type DeleteFaqInput = {
  where?: Maybe<InputId>;
};

export type UpdateHomeInput = {
  data?: Maybe<EditHomeInput>;
};

export type EditHomeInput = {
  aboutUsContent?: Maybe<Scalars['String']>;
  contactContent?: Maybe<Scalars['String']>;
  aboutUsImage?: Maybe<Scalars['ID']>;
  backgroundImage?: Maybe<Scalars['ID']>;
  backgroundVideo?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreatePhotoInput = {
  data?: Maybe<PhotoInput>;
};

export type PhotoInput = {
  title: Scalars['String'];
  isPublished?: Maybe<Scalars['Boolean']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  image?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UpdatePhotoInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditPhotoInput>;
};

export type EditPhotoInput = {
  title?: Maybe<Scalars['String']>;
  isPublished?: Maybe<Scalars['Boolean']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  image?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type DeletePhotoInput = {
  where?: Maybe<InputId>;
};

export type CreateSocialInput = {
  data?: Maybe<SocialInput>;
};

export type SocialInput = {
  url: Scalars['String'];
  icon: Scalars['String'];
  isPublished?: Maybe<Scalars['Boolean']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  label: Scalars['String'];
  colorHex?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UpdateSocialInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditSocialInput>;
};

export type EditSocialInput = {
  url?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  isPublished?: Maybe<Scalars['Boolean']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  label?: Maybe<Scalars['String']>;
  colorHex?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type DeleteSocialInput = {
  where?: Maybe<InputId>;
};

export type CreateTagInput = {
  data?: Maybe<TagInput>;
};

export type TagInput = {
  name: Scalars['String'];
  videos?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UpdateTagInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditTagInput>;
};

export type EditTagInput = {
  name?: Maybe<Scalars['String']>;
  videos?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type DeleteTagInput = {
  where?: Maybe<InputId>;
};

export type UpdateVideoPageInput = {
  data?: Maybe<EditVideoPageInput>;
};

export type EditVideoPageInput = {
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateVideoInput = {
  data?: Maybe<VideoInput>;
};

export type VideoInput = {
  url: Scalars['String'];
  title: Scalars['String'];
  description: Scalars['String'];
  isPublished?: Maybe<Scalars['Boolean']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  tags?: Maybe<Array<Maybe<Scalars['ID']>>>;
  thumbnail?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UpdateVideoInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditVideoInput>;
};

export type EditVideoInput = {
  url?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  isPublished?: Maybe<Scalars['Boolean']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  tags?: Maybe<Array<Maybe<Scalars['ID']>>>;
  thumbnail?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type DeleteVideoInput = {
  where?: Maybe<InputId>;
};

export type CreateRoleInput = {
  data?: Maybe<RoleInput>;
};

export type RoleInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UpdateRoleInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditRoleInput>;
};

export type EditRoleInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type DeleteRoleInput = {
  where?: Maybe<InputId>;
};

export type CreateUserInput = {
  data?: Maybe<UserInput>;
};

export type UserInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UpdateUserInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditUserInput>;
};

export type EditUserInput = {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type DeleteUserInput = {
  where?: Maybe<InputId>;
};


export type FileInfoInput = {
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
};

export type UsersPermissionsRegisterInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type EmailOptions = {
  firstname: Scalars['String'];
  email: Scalars['String'];
  date: Scalars['String'];
  place: Scalars['String'];
  style: Scalars['String'];
  message: Scalars['String'];
  agreement: Agreement;
};

export type Agreement = {
  value: Scalars['Boolean'];
  content: Scalars['String'];
};

export type ContactFormInput = {
  email: Scalars['String'];
  body?: Maybe<Scalars['String']>;
  subject?: Maybe<Scalars['String']>;
  styles?: Maybe<Array<ComponentContantFormStyleContantFormStyleInput>>;
  agreement: Scalars['String'];
  placeholders?: Maybe<Array<Maybe<ComponentContactFormPlaceholdersContactFormPlaceholderInput>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type ComponentContantFormStyleContantFormStyleInput = {
  name: Scalars['String'];
};

export type ComponentContactFormPlaceholdersContactFormPlaceholderInput = {
  field: Scalars['String'];
  placeholder: Scalars['String'];
};

export type HomeInput = {
  aboutUsContent: Scalars['String'];
  contactContent: Scalars['String'];
  aboutUsImage?: Maybe<Scalars['ID']>;
  backgroundImage?: Maybe<Scalars['ID']>;
  backgroundVideo?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type VideoPageInput = {
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type FileInput = {
  name: Scalars['String'];
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  ext?: Maybe<Scalars['String']>;
  mime: Scalars['String'];
  size: Scalars['Float'];
  url: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditFileInput = {
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash?: Maybe<Scalars['String']>;
  ext?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  url?: Maybe<Scalars['String']>;
  previewUrl?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type ComponentTagTagInput = {
  name: Scalars['String'];
};

export type EditComponentTagTagInput = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type AdminUser = {
  __typename?: 'AdminUser';
  id: Scalars['ID'];
  username?: Maybe<Scalars['String']>;
  firstname: Scalars['String'];
  lastname: Scalars['String'];
};




export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type ContactFormQueryVariables = Exact<{ [key: string]: never; }>;


export type ContactFormQuery = (
  { __typename?: 'Query' }
  & { contactForm?: Maybe<(
    { __typename?: 'ContactForm' }
    & Pick<ContactForm, 'agreement'>
    & { styles?: Maybe<Array<Maybe<(
      { __typename?: 'ComponentContantFormStyleContantFormStyle' }
      & Pick<ComponentContantFormStyleContantFormStyle, 'name'>
    )>>>, placeholders?: Maybe<Array<Maybe<(
      { __typename?: 'ComponentContactFormPlaceholdersContactFormPlaceholders' }
      & Pick<ComponentContactFormPlaceholdersContactFormPlaceholders, 'field' | 'placeholder'>
    )>>> }
  )> }
);

export type FaqsQueryVariables = Exact<{
  sort: Scalars['String'];
  limit: Scalars['Int'];
  start?: Maybe<Scalars['Int']>;
}>;


export type FaqsQuery = (
  { __typename?: 'Query' }
  & { faqs?: Maybe<Array<Maybe<(
    { __typename?: 'Faq' }
    & Pick<Faq, 'id' | 'created_at' | 'question' | 'answer'>
  )>>> }
);

export type HomeQueryVariables = Exact<{ [key: string]: never; }>;


export type HomeQuery = (
  { __typename?: 'Query' }
  & { home?: Maybe<(
    { __typename?: 'Home' }
    & Pick<Home, 'aboutUsContent' | 'contactContent'>
    & { backgroundVideo?: Maybe<(
      { __typename?: 'UploadFile' }
      & Pick<UploadFile, 'url' | 'mime'>
    )>, aboutUsImage?: Maybe<(
      { __typename?: 'UploadFile' }
      & Pick<UploadFile, 'caption' | 'alternativeText' | 'formats' | 'url' | 'width' | 'height'>
    )>, backgroundImage?: Maybe<(
      { __typename?: 'UploadFile' }
      & Pick<UploadFile, 'caption' | 'alternativeText' | 'formats' | 'url' | 'width' | 'height'>
    )> }
  )> }
);

export type PhotosQueryVariables = Exact<{
  limit: Scalars['Int'];
  start?: Maybe<Scalars['Int']>;
}>;


export type PhotosQuery = (
  { __typename?: 'Query' }
  & { photos?: Maybe<Array<Maybe<(
    { __typename?: 'Photo' }
    & Pick<Photo, 'id' | 'title'>
    & { image?: Maybe<(
      { __typename?: 'UploadFile' }
      & Pick<UploadFile, 'width' | 'height' | 'url' | 'caption' | 'alternativeText' | 'formats'>
    )> }
  )>>> }
);

export type PhotosCountPublishedQueryVariables = Exact<{ [key: string]: never; }>;


export type PhotosCountPublishedQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'photosCountPublished'>
);

export type SendEmailMutationVariables = Exact<{
  options: EmailOptions;
}>;


export type SendEmailMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'sendEmail'>
);

export type SocialsQueryVariables = Exact<{ [key: string]: never; }>;


export type SocialsQuery = (
  { __typename?: 'Query' }
  & { socials?: Maybe<Array<Maybe<(
    { __typename?: 'Social' }
    & Pick<Social, 'id' | 'label' | 'icon' | 'url' | 'colorHex'>
  )>>> }
);

export type TagsQueryVariables = Exact<{ [key: string]: never; }>;


export type TagsQuery = (
  { __typename?: 'Query' }
  & { tags?: Maybe<Array<Maybe<(
    { __typename?: 'Tag' }
    & Pick<Tag, 'id' | 'name'>
    & { videos?: Maybe<Array<Maybe<(
      { __typename?: 'Video' }
      & Pick<Video, 'id'>
    )>>> }
  )>>> }
);

export type VideoPageQueryVariables = Exact<{ [key: string]: never; }>;


export type VideoPageQuery = (
  { __typename?: 'Query' }
  & { videoPage?: Maybe<(
    { __typename?: 'VideoPage' }
    & Pick<VideoPage, 'description'>
    & { image?: Maybe<(
      { __typename?: 'UploadFile' }
      & Pick<UploadFile, 'caption' | 'alternativeText' | 'formats' | 'url' | 'width' | 'height'>
    )> }
  )> }
);

export type VideosQueryVariables = Exact<{
  limit: Scalars['Int'];
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
}>;


export type VideosQuery = (
  { __typename?: 'Query' }
  & { videos?: Maybe<Array<Maybe<(
    { __typename?: 'Video' }
    & Pick<Video, 'id' | 'url' | 'title' | 'description'>
    & { thumbnail?: Maybe<(
      { __typename?: 'UploadFile' }
      & Pick<UploadFile, 'caption' | 'alternativeText' | 'formats'>
    )>, tags?: Maybe<Array<Maybe<(
      { __typename?: 'Tag' }
      & Pick<Tag, 'id' | 'name'>
    )>>> }
  )>>> }
);

export type VideosCountPublishedQueryVariables = Exact<{
  tagName?: Maybe<Scalars['String']>;
}>;


export type VideosCountPublishedQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'videosCountPublished'>
);


export const ContactFormDocument = gql`
    query ContactForm {
  contactForm {
    styles {
      name
    }
    agreement
    placeholders {
      field
      placeholder
    }
  }
}
    `;

/**
 * __useContactFormQuery__
 *
 * To run a query within a React component, call `useContactFormQuery` and pass it any options that fit your needs.
 * When your component renders, `useContactFormQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useContactFormQuery({
 *   variables: {
 *   },
 * });
 */
export function useContactFormQuery(baseOptions?: Apollo.QueryHookOptions<ContactFormQuery, ContactFormQueryVariables>) {
        return Apollo.useQuery<ContactFormQuery, ContactFormQueryVariables>(ContactFormDocument, baseOptions);
      }
export function useContactFormLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ContactFormQuery, ContactFormQueryVariables>) {
          return Apollo.useLazyQuery<ContactFormQuery, ContactFormQueryVariables>(ContactFormDocument, baseOptions);
        }
export type ContactFormQueryHookResult = ReturnType<typeof useContactFormQuery>;
export type ContactFormLazyQueryHookResult = ReturnType<typeof useContactFormLazyQuery>;
export type ContactFormQueryResult = Apollo.QueryResult<ContactFormQuery, ContactFormQueryVariables>;
export const FaqsDocument = gql`
    query Faqs($sort: String!, $limit: Int!, $start: Int) {
  faqs(sort: $sort, limit: $limit, start: $start) {
    id
    created_at
    question
    answer
  }
}
    `;

/**
 * __useFaqsQuery__
 *
 * To run a query within a React component, call `useFaqsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFaqsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFaqsQuery({
 *   variables: {
 *      sort: // value for 'sort'
 *      limit: // value for 'limit'
 *      start: // value for 'start'
 *   },
 * });
 */
export function useFaqsQuery(baseOptions?: Apollo.QueryHookOptions<FaqsQuery, FaqsQueryVariables>) {
        return Apollo.useQuery<FaqsQuery, FaqsQueryVariables>(FaqsDocument, baseOptions);
      }
export function useFaqsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FaqsQuery, FaqsQueryVariables>) {
          return Apollo.useLazyQuery<FaqsQuery, FaqsQueryVariables>(FaqsDocument, baseOptions);
        }
export type FaqsQueryHookResult = ReturnType<typeof useFaqsQuery>;
export type FaqsLazyQueryHookResult = ReturnType<typeof useFaqsLazyQuery>;
export type FaqsQueryResult = Apollo.QueryResult<FaqsQuery, FaqsQueryVariables>;
export const HomeDocument = gql`
    query Home {
  home {
    backgroundVideo {
      url
      mime
    }
    aboutUsContent
    contactContent
    aboutUsImage {
      caption
      alternativeText
      formats
      url
      width
      height
    }
    backgroundImage {
      caption
      alternativeText
      formats
      url
      width
      height
    }
  }
}
    `;

/**
 * __useHomeQuery__
 *
 * To run a query within a React component, call `useHomeQuery` and pass it any options that fit your needs.
 * When your component renders, `useHomeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHomeQuery({
 *   variables: {
 *   },
 * });
 */
export function useHomeQuery(baseOptions?: Apollo.QueryHookOptions<HomeQuery, HomeQueryVariables>) {
        return Apollo.useQuery<HomeQuery, HomeQueryVariables>(HomeDocument, baseOptions);
      }
export function useHomeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HomeQuery, HomeQueryVariables>) {
          return Apollo.useLazyQuery<HomeQuery, HomeQueryVariables>(HomeDocument, baseOptions);
        }
export type HomeQueryHookResult = ReturnType<typeof useHomeQuery>;
export type HomeLazyQueryHookResult = ReturnType<typeof useHomeLazyQuery>;
export type HomeQueryResult = Apollo.QueryResult<HomeQuery, HomeQueryVariables>;
export const PhotosDocument = gql`
    query Photos($limit: Int!, $start: Int) {
  photos(limit: $limit, start: $start) {
    id
    image {
      width
      height
      url
      caption
      alternativeText
      formats
    }
    title
  }
}
    `;

/**
 * __usePhotosQuery__
 *
 * To run a query within a React component, call `usePhotosQuery` and pass it any options that fit your needs.
 * When your component renders, `usePhotosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePhotosQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      start: // value for 'start'
 *   },
 * });
 */
export function usePhotosQuery(baseOptions?: Apollo.QueryHookOptions<PhotosQuery, PhotosQueryVariables>) {
        return Apollo.useQuery<PhotosQuery, PhotosQueryVariables>(PhotosDocument, baseOptions);
      }
export function usePhotosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PhotosQuery, PhotosQueryVariables>) {
          return Apollo.useLazyQuery<PhotosQuery, PhotosQueryVariables>(PhotosDocument, baseOptions);
        }
export type PhotosQueryHookResult = ReturnType<typeof usePhotosQuery>;
export type PhotosLazyQueryHookResult = ReturnType<typeof usePhotosLazyQuery>;
export type PhotosQueryResult = Apollo.QueryResult<PhotosQuery, PhotosQueryVariables>;
export const PhotosCountPublishedDocument = gql`
    query PhotosCountPublished {
  photosCountPublished
}
    `;

/**
 * __usePhotosCountPublishedQuery__
 *
 * To run a query within a React component, call `usePhotosCountPublishedQuery` and pass it any options that fit your needs.
 * When your component renders, `usePhotosCountPublishedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePhotosCountPublishedQuery({
 *   variables: {
 *   },
 * });
 */
export function usePhotosCountPublishedQuery(baseOptions?: Apollo.QueryHookOptions<PhotosCountPublishedQuery, PhotosCountPublishedQueryVariables>) {
        return Apollo.useQuery<PhotosCountPublishedQuery, PhotosCountPublishedQueryVariables>(PhotosCountPublishedDocument, baseOptions);
      }
export function usePhotosCountPublishedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PhotosCountPublishedQuery, PhotosCountPublishedQueryVariables>) {
          return Apollo.useLazyQuery<PhotosCountPublishedQuery, PhotosCountPublishedQueryVariables>(PhotosCountPublishedDocument, baseOptions);
        }
export type PhotosCountPublishedQueryHookResult = ReturnType<typeof usePhotosCountPublishedQuery>;
export type PhotosCountPublishedLazyQueryHookResult = ReturnType<typeof usePhotosCountPublishedLazyQuery>;
export type PhotosCountPublishedQueryResult = Apollo.QueryResult<PhotosCountPublishedQuery, PhotosCountPublishedQueryVariables>;
export const SendEmailDocument = gql`
    mutation SendEmail($options: EmailOptions!) {
  sendEmail(options: $options)
}
    `;
export type SendEmailMutationFn = Apollo.MutationFunction<SendEmailMutation, SendEmailMutationVariables>;

/**
 * __useSendEmailMutation__
 *
 * To run a mutation, you first call `useSendEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendEmailMutation, { data, loading, error }] = useSendEmailMutation({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useSendEmailMutation(baseOptions?: Apollo.MutationHookOptions<SendEmailMutation, SendEmailMutationVariables>) {
        return Apollo.useMutation<SendEmailMutation, SendEmailMutationVariables>(SendEmailDocument, baseOptions);
      }
export type SendEmailMutationHookResult = ReturnType<typeof useSendEmailMutation>;
export type SendEmailMutationResult = Apollo.MutationResult<SendEmailMutation>;
export type SendEmailMutationOptions = Apollo.BaseMutationOptions<SendEmailMutation, SendEmailMutationVariables>;
export const SocialsDocument = gql`
    query Socials {
  socials {
    id
    label
    icon
    url
    colorHex
  }
}
    `;

/**
 * __useSocialsQuery__
 *
 * To run a query within a React component, call `useSocialsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSocialsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSocialsQuery({
 *   variables: {
 *   },
 * });
 */
export function useSocialsQuery(baseOptions?: Apollo.QueryHookOptions<SocialsQuery, SocialsQueryVariables>) {
        return Apollo.useQuery<SocialsQuery, SocialsQueryVariables>(SocialsDocument, baseOptions);
      }
export function useSocialsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SocialsQuery, SocialsQueryVariables>) {
          return Apollo.useLazyQuery<SocialsQuery, SocialsQueryVariables>(SocialsDocument, baseOptions);
        }
export type SocialsQueryHookResult = ReturnType<typeof useSocialsQuery>;
export type SocialsLazyQueryHookResult = ReturnType<typeof useSocialsLazyQuery>;
export type SocialsQueryResult = Apollo.QueryResult<SocialsQuery, SocialsQueryVariables>;
export const TagsDocument = gql`
    query Tags {
  tags {
    id
    name
    videos {
      id
    }
  }
}
    `;

/**
 * __useTagsQuery__
 *
 * To run a query within a React component, call `useTagsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTagsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTagsQuery({
 *   variables: {
 *   },
 * });
 */
export function useTagsQuery(baseOptions?: Apollo.QueryHookOptions<TagsQuery, TagsQueryVariables>) {
        return Apollo.useQuery<TagsQuery, TagsQueryVariables>(TagsDocument, baseOptions);
      }
export function useTagsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TagsQuery, TagsQueryVariables>) {
          return Apollo.useLazyQuery<TagsQuery, TagsQueryVariables>(TagsDocument, baseOptions);
        }
export type TagsQueryHookResult = ReturnType<typeof useTagsQuery>;
export type TagsLazyQueryHookResult = ReturnType<typeof useTagsLazyQuery>;
export type TagsQueryResult = Apollo.QueryResult<TagsQuery, TagsQueryVariables>;
export const VideoPageDocument = gql`
    query VideoPage {
  videoPage {
    description
    image {
      caption
      alternativeText
      formats
      url
      width
      height
    }
  }
}
    `;

/**
 * __useVideoPageQuery__
 *
 * To run a query within a React component, call `useVideoPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useVideoPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVideoPageQuery({
 *   variables: {
 *   },
 * });
 */
export function useVideoPageQuery(baseOptions?: Apollo.QueryHookOptions<VideoPageQuery, VideoPageQueryVariables>) {
        return Apollo.useQuery<VideoPageQuery, VideoPageQueryVariables>(VideoPageDocument, baseOptions);
      }
export function useVideoPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<VideoPageQuery, VideoPageQueryVariables>) {
          return Apollo.useLazyQuery<VideoPageQuery, VideoPageQueryVariables>(VideoPageDocument, baseOptions);
        }
export type VideoPageQueryHookResult = ReturnType<typeof useVideoPageQuery>;
export type VideoPageLazyQueryHookResult = ReturnType<typeof useVideoPageLazyQuery>;
export type VideoPageQueryResult = Apollo.QueryResult<VideoPageQuery, VideoPageQueryVariables>;
export const VideosDocument = gql`
    query Videos($limit: Int!, $start: Int, $where: JSON) {
  videos(limit: $limit, start: $start, where: $where) {
    id
    url
    thumbnail {
      caption
      alternativeText
      formats
    }
    title
    description
    tags {
      id
      name
    }
  }
}
    `;

/**
 * __useVideosQuery__
 *
 * To run a query within a React component, call `useVideosQuery` and pass it any options that fit your needs.
 * When your component renders, `useVideosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVideosQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      start: // value for 'start'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useVideosQuery(baseOptions?: Apollo.QueryHookOptions<VideosQuery, VideosQueryVariables>) {
        return Apollo.useQuery<VideosQuery, VideosQueryVariables>(VideosDocument, baseOptions);
      }
export function useVideosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<VideosQuery, VideosQueryVariables>) {
          return Apollo.useLazyQuery<VideosQuery, VideosQueryVariables>(VideosDocument, baseOptions);
        }
export type VideosQueryHookResult = ReturnType<typeof useVideosQuery>;
export type VideosLazyQueryHookResult = ReturnType<typeof useVideosLazyQuery>;
export type VideosQueryResult = Apollo.QueryResult<VideosQuery, VideosQueryVariables>;
export const VideosCountPublishedDocument = gql`
    query VideosCountPublished($tagName: String) {
  videosCountPublished(tagName: $tagName)
}
    `;

/**
 * __useVideosCountPublishedQuery__
 *
 * To run a query within a React component, call `useVideosCountPublishedQuery` and pass it any options that fit your needs.
 * When your component renders, `useVideosCountPublishedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVideosCountPublishedQuery({
 *   variables: {
 *      tagName: // value for 'tagName'
 *   },
 * });
 */
export function useVideosCountPublishedQuery(baseOptions?: Apollo.QueryHookOptions<VideosCountPublishedQuery, VideosCountPublishedQueryVariables>) {
        return Apollo.useQuery<VideosCountPublishedQuery, VideosCountPublishedQueryVariables>(VideosCountPublishedDocument, baseOptions);
      }
export function useVideosCountPublishedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<VideosCountPublishedQuery, VideosCountPublishedQueryVariables>) {
          return Apollo.useLazyQuery<VideosCountPublishedQuery, VideosCountPublishedQueryVariables>(VideosCountPublishedDocument, baseOptions);
        }
export type VideosCountPublishedQueryHookResult = ReturnType<typeof useVideosCountPublishedQuery>;
export type VideosCountPublishedLazyQueryHookResult = ReturnType<typeof useVideosCountPublishedLazyQuery>;
export type VideosCountPublishedQueryResult = Apollo.QueryResult<VideosCountPublishedQuery, VideosCountPublishedQueryVariables>;