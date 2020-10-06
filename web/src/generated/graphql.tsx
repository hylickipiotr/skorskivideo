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
  faq?: Maybe<Faq>;
  faqs?: Maybe<Array<Maybe<Faq>>>;
  faqsConnection?: Maybe<FaqConnection>;
  photo?: Maybe<Photo>;
  photos?: Maybe<Array<Maybe<Photo>>>;
  photosConnection?: Maybe<PhotoConnection>;
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

export type Photo = {
  __typename?: 'Photo';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  url: Scalars['String'];
  width: Scalars['Int'];
  height: Scalars['Int'];
  title: Scalars['String'];
  isPublished: Scalars['Boolean'];
  publishedAt?: Maybe<Scalars['DateTime']>;
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
  url?: Maybe<Array<Maybe<PhotoConnectionUrl>>>;
  width?: Maybe<Array<Maybe<PhotoConnectionWidth>>>;
  height?: Maybe<Array<Maybe<PhotoConnectionHeight>>>;
  title?: Maybe<Array<Maybe<PhotoConnectionTitle>>>;
  isPublished?: Maybe<Array<Maybe<PhotoConnectionIsPublished>>>;
  publishedAt?: Maybe<Array<Maybe<PhotoConnectionPublishedAt>>>;
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

export type PhotoConnectionUrl = {
  __typename?: 'PhotoConnectionUrl';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<PhotoConnection>;
};

export type PhotoConnectionWidth = {
  __typename?: 'PhotoConnectionWidth';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<PhotoConnection>;
};

export type PhotoConnectionHeight = {
  __typename?: 'PhotoConnectionHeight';
  key?: Maybe<Scalars['Int']>;
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

export type PhotoAggregator = {
  __typename?: 'PhotoAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<PhotoAggregatorSum>;
  avg?: Maybe<PhotoAggregatorAvg>;
  min?: Maybe<PhotoAggregatorMin>;
  max?: Maybe<PhotoAggregatorMax>;
};

export type PhotoAggregatorSum = {
  __typename?: 'PhotoAggregatorSum';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

export type PhotoAggregatorAvg = {
  __typename?: 'PhotoAggregatorAvg';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

export type PhotoAggregatorMin = {
  __typename?: 'PhotoAggregatorMin';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

export type PhotoAggregatorMax = {
  __typename?: 'PhotoAggregatorMax';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

export type Video = {
  __typename?: 'Video';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  url: Scalars['String'];
  title: Scalars['String'];
  description: Scalars['String'];
  tags?: Maybe<Array<Maybe<ComponentTagTags>>>;
  isPublished: Scalars['Boolean'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  thumbnailUrl: Scalars['String'];
};

export type ComponentTagTags = {
  __typename?: 'ComponentTagTags';
  id: Scalars['ID'];
  name: Scalars['String'];
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
  thumbnailUrl?: Maybe<Array<Maybe<VideoConnectionThumbnailUrl>>>;
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

export type VideoConnectionThumbnailUrl = {
  __typename?: 'VideoConnectionThumbnailUrl';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<VideoConnection>;
};

export type VideoAggregator = {
  __typename?: 'VideoAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
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

export type Morph = UsersPermissionsMe | UsersPermissionsMeRole | UsersPermissionsLoginPayload | UserPermissionsPasswordPayload | Faq | FaqConnection | FaqAggregator | FaqGroupBy | FaqConnectionId | FaqConnectionCreated_At | FaqConnectionUpdated_At | FaqConnectionQuestion | FaqConnectionAnswer | FaqConnectionIsPublished | FaqConnectionPublishedAt | CreateFaqPayload | UpdateFaqPayload | DeleteFaqPayload | Photo | PhotoConnection | PhotoAggregator | PhotoAggregatorSum | PhotoAggregatorAvg | PhotoAggregatorMin | PhotoAggregatorMax | PhotoGroupBy | PhotoConnectionId | PhotoConnectionCreated_At | PhotoConnectionUpdated_At | PhotoConnectionUrl | PhotoConnectionWidth | PhotoConnectionHeight | PhotoConnectionTitle | PhotoConnectionIsPublished | PhotoConnectionPublishedAt | CreatePhotoPayload | UpdatePhotoPayload | DeletePhotoPayload | Video | VideoConnection | VideoAggregator | VideoGroupBy | VideoConnectionId | VideoConnectionCreated_At | VideoConnectionUpdated_At | VideoConnectionUrl | VideoConnectionTitle | VideoConnectionDescription | VideoConnectionIsPublished | VideoConnectionPublishedAt | VideoConnectionThumbnailUrl | CreateVideoPayload | UpdateVideoPayload | DeleteVideoPayload | UploadFile | UploadFileConnection | UploadFileAggregator | UploadFileAggregatorSum | UploadFileAggregatorAvg | UploadFileAggregatorMin | UploadFileAggregatorMax | UploadFileGroupBy | UploadFileConnectionId | UploadFileConnectionCreated_At | UploadFileConnectionUpdated_At | UploadFileConnectionName | UploadFileConnectionAlternativeText | UploadFileConnectionCaption | UploadFileConnectionWidth | UploadFileConnectionHeight | UploadFileConnectionFormats | UploadFileConnectionHash | UploadFileConnectionExt | UploadFileConnectionMime | UploadFileConnectionSize | UploadFileConnectionUrl | UploadFileConnectionPreviewUrl | UploadFileConnectionProvider | UploadFileConnectionProvider_Metadata | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsRoleConnection | UsersPermissionsRoleAggregator | UsersPermissionsRoleGroupBy | UsersPermissionsRoleConnectionId | UsersPermissionsRoleConnectionName | UsersPermissionsRoleConnectionDescription | UsersPermissionsRoleConnectionType | CreateRolePayload | UpdateRolePayload | DeleteRolePayload | UsersPermissionsUser | UsersPermissionsUserConnection | UsersPermissionsUserAggregator | UsersPermissionsUserGroupBy | UsersPermissionsUserConnectionId | UsersPermissionsUserConnectionCreated_At | UsersPermissionsUserConnectionUpdated_At | UsersPermissionsUserConnectionUsername | UsersPermissionsUserConnectionEmail | UsersPermissionsUserConnectionProvider | UsersPermissionsUserConnectionConfirmed | UsersPermissionsUserConnectionBlocked | UsersPermissionsUserConnectionRole | CreateUserPayload | UpdateUserPayload | DeleteUserPayload | ComponentTagTags;

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

export type Mutation = {
  __typename?: 'Mutation';
  createFaq?: Maybe<CreateFaqPayload>;
  updateFaq?: Maybe<UpdateFaqPayload>;
  deleteFaq?: Maybe<DeleteFaqPayload>;
  createPhoto?: Maybe<CreatePhotoPayload>;
  updatePhoto?: Maybe<UpdatePhotoPayload>;
  deletePhoto?: Maybe<DeletePhotoPayload>;
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


export type MutationCreatePhotoArgs = {
  input?: Maybe<CreatePhotoInput>;
};


export type MutationUpdatePhotoArgs = {
  input?: Maybe<UpdatePhotoInput>;
};


export type MutationDeletePhotoArgs = {
  input?: Maybe<DeletePhotoInput>;
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

export type CreatePhotoInput = {
  data?: Maybe<PhotoInput>;
};

export type PhotoInput = {
  url: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  title: Scalars['String'];
  isPublished?: Maybe<Scalars['Boolean']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UpdatePhotoInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditPhotoInput>;
};

export type EditPhotoInput = {
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  isPublished?: Maybe<Scalars['Boolean']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type DeletePhotoInput = {
  where?: Maybe<InputId>;
};

export type CreateVideoInput = {
  data?: Maybe<VideoInput>;
};

export type VideoInput = {
  url: Scalars['String'];
  title: Scalars['String'];
  description: Scalars['String'];
  tags?: Maybe<Array<ComponentTagTagInput>>;
  isPublished?: Maybe<Scalars['Boolean']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  thumbnailUrl: Scalars['String'];
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type ComponentTagTagInput = {
  name: Scalars['String'];
};

export type UpdateVideoInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditVideoInput>;
};

export type EditVideoInput = {
  url?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<EditComponentTagTagInput>>>;
  isPublished?: Maybe<Scalars['Boolean']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  thumbnailUrl?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditComponentTagTagInput = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
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

export type VideosQueryVariables = Exact<{
  limit: Scalars['Int'];
  start?: Maybe<Scalars['Int']>;
}>;


export type VideosQuery = (
  { __typename?: 'Query' }
  & { videos?: Maybe<Array<Maybe<(
    { __typename?: 'Video' }
    & Pick<Video, 'id' | 'url' | 'thumbnailUrl' | 'title' | 'description'>
    & { tags?: Maybe<Array<Maybe<(
      { __typename?: 'ComponentTagTags' }
      & Pick<ComponentTagTags, 'id' | 'name'>
    )>>> }
  )>>> }
);


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
export const VideosDocument = gql`
    query Videos($limit: Int!, $start: Int) {
  videos(limit: $limit, start: $start) {
    id
    url
    thumbnailUrl
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