import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
   [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
   [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
   [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
   ID: string;
   String: string;
   Boolean: boolean;
   Int: number;
   Float: number;
   DateTime: any;
   Dimension: any;
   HexColor: any;
   JSON: any;
   Quality: any;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
   __typename?: 'Asset';
   contentType?: Maybe<Scalars['String']>;
   contentfulMetadata: ContentfulMetadata;
   description?: Maybe<Scalars['String']>;
   fileName?: Maybe<Scalars['String']>;
   height?: Maybe<Scalars['Int']>;
   linkedFrom?: Maybe<AssetLinkingCollections>;
   size?: Maybe<Scalars['Int']>;
   sys: Sys;
   title?: Maybe<Scalars['String']>;
   url?: Maybe<Scalars['String']>;
   width?: Maybe<Scalars['Int']>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
   locale?: InputMaybe<Scalars['String']>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
   locale?: InputMaybe<Scalars['String']>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
   locale?: InputMaybe<Scalars['String']>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
   locale?: InputMaybe<Scalars['String']>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
   allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
   locale?: InputMaybe<Scalars['String']>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
   locale?: InputMaybe<Scalars['String']>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
   locale?: InputMaybe<Scalars['String']>;
   transform?: InputMaybe<ImageTransformOptions>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
   locale?: InputMaybe<Scalars['String']>;
};

export type AssetCollection = {
   __typename?: 'AssetCollection';
   items: Array<Maybe<Asset>>;
   limit: Scalars['Int'];
   skip: Scalars['Int'];
   total: Scalars['Int'];
};

export type AssetFilter = {
   AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
   OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
   contentType?: InputMaybe<Scalars['String']>;
   contentType_contains?: InputMaybe<Scalars['String']>;
   contentType_exists?: InputMaybe<Scalars['Boolean']>;
   contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
   contentType_not?: InputMaybe<Scalars['String']>;
   contentType_not_contains?: InputMaybe<Scalars['String']>;
   contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
   contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
   description?: InputMaybe<Scalars['String']>;
   description_contains?: InputMaybe<Scalars['String']>;
   description_exists?: InputMaybe<Scalars['Boolean']>;
   description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
   description_not?: InputMaybe<Scalars['String']>;
   description_not_contains?: InputMaybe<Scalars['String']>;
   description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
   fileName?: InputMaybe<Scalars['String']>;
   fileName_contains?: InputMaybe<Scalars['String']>;
   fileName_exists?: InputMaybe<Scalars['Boolean']>;
   fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
   fileName_not?: InputMaybe<Scalars['String']>;
   fileName_not_contains?: InputMaybe<Scalars['String']>;
   fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
   height?: InputMaybe<Scalars['Int']>;
   height_exists?: InputMaybe<Scalars['Boolean']>;
   height_gt?: InputMaybe<Scalars['Int']>;
   height_gte?: InputMaybe<Scalars['Int']>;
   height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
   height_lt?: InputMaybe<Scalars['Int']>;
   height_lte?: InputMaybe<Scalars['Int']>;
   height_not?: InputMaybe<Scalars['Int']>;
   height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
   size?: InputMaybe<Scalars['Int']>;
   size_exists?: InputMaybe<Scalars['Boolean']>;
   size_gt?: InputMaybe<Scalars['Int']>;
   size_gte?: InputMaybe<Scalars['Int']>;
   size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
   size_lt?: InputMaybe<Scalars['Int']>;
   size_lte?: InputMaybe<Scalars['Int']>;
   size_not?: InputMaybe<Scalars['Int']>;
   size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
   sys?: InputMaybe<SysFilter>;
   title?: InputMaybe<Scalars['String']>;
   title_contains?: InputMaybe<Scalars['String']>;
   title_exists?: InputMaybe<Scalars['Boolean']>;
   title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
   title_not?: InputMaybe<Scalars['String']>;
   title_not_contains?: InputMaybe<Scalars['String']>;
   title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
   url?: InputMaybe<Scalars['String']>;
   url_contains?: InputMaybe<Scalars['String']>;
   url_exists?: InputMaybe<Scalars['Boolean']>;
   url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
   url_not?: InputMaybe<Scalars['String']>;
   url_not_contains?: InputMaybe<Scalars['String']>;
   url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
   width?: InputMaybe<Scalars['Int']>;
   width_exists?: InputMaybe<Scalars['Boolean']>;
   width_gt?: InputMaybe<Scalars['Int']>;
   width_gte?: InputMaybe<Scalars['Int']>;
   width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
   width_lt?: InputMaybe<Scalars['Int']>;
   width_lte?: InputMaybe<Scalars['Int']>;
   width_not?: InputMaybe<Scalars['Int']>;
   width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type AssetLinkingCollections = {
   __typename?: 'AssetLinkingCollections';
   authorCollection?: Maybe<AuthorCollection>;
   categoryCollection?: Maybe<CategoryCollection>;
   entryCollection?: Maybe<EntryCollection>;
   plantCollection?: Maybe<PlantCollection>;
};

export type AssetLinkingCollectionsAuthorCollectionArgs = {
   limit?: InputMaybe<Scalars['Int']>;
   locale?: InputMaybe<Scalars['String']>;
   preview?: InputMaybe<Scalars['Boolean']>;
   skip?: InputMaybe<Scalars['Int']>;
};

export type AssetLinkingCollectionsCategoryCollectionArgs = {
   limit?: InputMaybe<Scalars['Int']>;
   locale?: InputMaybe<Scalars['String']>;
   preview?: InputMaybe<Scalars['Boolean']>;
   skip?: InputMaybe<Scalars['Int']>;
};

export type AssetLinkingCollectionsEntryCollectionArgs = {
   limit?: InputMaybe<Scalars['Int']>;
   locale?: InputMaybe<Scalars['String']>;
   preview?: InputMaybe<Scalars['Boolean']>;
   skip?: InputMaybe<Scalars['Int']>;
};

export type AssetLinkingCollectionsPlantCollectionArgs = {
   limit?: InputMaybe<Scalars['Int']>;
   locale?: InputMaybe<Scalars['String']>;
   preview?: InputMaybe<Scalars['Boolean']>;
   skip?: InputMaybe<Scalars['Int']>;
};

export enum AssetOrder {
   ContentTypeAsc = 'contentType_ASC',
   ContentTypeDesc = 'contentType_DESC',
   FileNameAsc = 'fileName_ASC',
   FileNameDesc = 'fileName_DESC',
   HeightAsc = 'height_ASC',
   HeightDesc = 'height_DESC',
   SizeAsc = 'size_ASC',
   SizeDesc = 'size_DESC',
   SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
   SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
   SysIdAsc = 'sys_id_ASC',
   SysIdDesc = 'sys_id_DESC',
   SysPublishedAtAsc = 'sys_publishedAt_ASC',
   SysPublishedAtDesc = 'sys_publishedAt_DESC',
   SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
   SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
   UrlAsc = 'url_ASC',
   UrlDesc = 'url_DESC',
   WidthAsc = 'width_ASC',
   WidthDesc = 'width_DESC',
}

/** Plant entry creator [See type definition](https://app.contentful.com/spaces/jcu0yamxms9o/content_types/author) */
export type Author = Entry & {
   __typename?: 'Author';
   biography?: Maybe<Scalars['String']>;
   contentfulMetadata: ContentfulMetadata;
   fullName?: Maybe<Scalars['String']>;
   handle?: Maybe<Scalars['String']>;
   linkedFrom?: Maybe<AuthorLinkingCollections>;
   linkedIn?: Maybe<Scalars['String']>;
   photo?: Maybe<Asset>;
   sys: Sys;
   twitter?: Maybe<Scalars['String']>;
};

/** Plant entry creator [See type definition](https://app.contentful.com/spaces/jcu0yamxms9o/content_types/author) */
export type AuthorBiographyArgs = {
   locale?: InputMaybe<Scalars['String']>;
};

/** Plant entry creator [See type definition](https://app.contentful.com/spaces/jcu0yamxms9o/content_types/author) */
export type AuthorFullNameArgs = {
   locale?: InputMaybe<Scalars['String']>;
};

/** Plant entry creator [See type definition](https://app.contentful.com/spaces/jcu0yamxms9o/content_types/author) */
export type AuthorHandleArgs = {
   locale?: InputMaybe<Scalars['String']>;
};

/** Plant entry creator [See type definition](https://app.contentful.com/spaces/jcu0yamxms9o/content_types/author) */
export type AuthorLinkedFromArgs = {
   allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** Plant entry creator [See type definition](https://app.contentful.com/spaces/jcu0yamxms9o/content_types/author) */
export type AuthorLinkedInArgs = {
   locale?: InputMaybe<Scalars['String']>;
};

/** Plant entry creator [See type definition](https://app.contentful.com/spaces/jcu0yamxms9o/content_types/author) */
export type AuthorPhotoArgs = {
   locale?: InputMaybe<Scalars['String']>;
   preview?: InputMaybe<Scalars['Boolean']>;
};

/** Plant entry creator [See type definition](https://app.contentful.com/spaces/jcu0yamxms9o/content_types/author) */
export type AuthorTwitterArgs = {
   locale?: InputMaybe<Scalars['String']>;
};

export type AuthorCollection = {
   __typename?: 'AuthorCollection';
   items: Array<Maybe<Author>>;
   limit: Scalars['Int'];
   skip: Scalars['Int'];
   total: Scalars['Int'];
};

export type AuthorFilter = {
   AND?: InputMaybe<Array<InputMaybe<AuthorFilter>>>;
   OR?: InputMaybe<Array<InputMaybe<AuthorFilter>>>;
   biography?: InputMaybe<Scalars['String']>;
   biography_contains?: InputMaybe<Scalars['String']>;
   biography_exists?: InputMaybe<Scalars['Boolean']>;
   biography_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
   biography_not?: InputMaybe<Scalars['String']>;
   biography_not_contains?: InputMaybe<Scalars['String']>;
   biography_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
   contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
   fullName?: InputMaybe<Scalars['String']>;
   fullName_contains?: InputMaybe<Scalars['String']>;
   fullName_exists?: InputMaybe<Scalars['Boolean']>;
   fullName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
   fullName_not?: InputMaybe<Scalars['String']>;
   fullName_not_contains?: InputMaybe<Scalars['String']>;
   fullName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
   handle?: InputMaybe<Scalars['String']>;
   handle_contains?: InputMaybe<Scalars['String']>;
   handle_exists?: InputMaybe<Scalars['Boolean']>;
   handle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
   handle_not?: InputMaybe<Scalars['String']>;
   handle_not_contains?: InputMaybe<Scalars['String']>;
   handle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
   linkedIn?: InputMaybe<Scalars['String']>;
   linkedIn_contains?: InputMaybe<Scalars['String']>;
   linkedIn_exists?: InputMaybe<Scalars['Boolean']>;
   linkedIn_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
   linkedIn_not?: InputMaybe<Scalars['String']>;
   linkedIn_not_contains?: InputMaybe<Scalars['String']>;
   linkedIn_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
   photo_exists?: InputMaybe<Scalars['Boolean']>;
   sys?: InputMaybe<SysFilter>;
   twitter?: InputMaybe<Scalars['String']>;
   twitter_contains?: InputMaybe<Scalars['String']>;
   twitter_exists?: InputMaybe<Scalars['Boolean']>;
   twitter_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
   twitter_not?: InputMaybe<Scalars['String']>;
   twitter_not_contains?: InputMaybe<Scalars['String']>;
   twitter_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type AuthorLinkingCollections = {
   __typename?: 'AuthorLinkingCollections';
   entryCollection?: Maybe<EntryCollection>;
   plantCollection?: Maybe<PlantCollection>;
};

export type AuthorLinkingCollectionsEntryCollectionArgs = {
   limit?: InputMaybe<Scalars['Int']>;
   locale?: InputMaybe<Scalars['String']>;
   preview?: InputMaybe<Scalars['Boolean']>;
   skip?: InputMaybe<Scalars['Int']>;
};

export type AuthorLinkingCollectionsPlantCollectionArgs = {
   limit?: InputMaybe<Scalars['Int']>;
   locale?: InputMaybe<Scalars['String']>;
   preview?: InputMaybe<Scalars['Boolean']>;
   skip?: InputMaybe<Scalars['Int']>;
};

export enum AuthorOrder {
   FullNameAsc = 'fullName_ASC',
   FullNameDesc = 'fullName_DESC',
   HandleAsc = 'handle_ASC',
   HandleDesc = 'handle_DESC',
   LinkedInAsc = 'linkedIn_ASC',
   LinkedInDesc = 'linkedIn_DESC',
   SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
   SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
   SysIdAsc = 'sys_id_ASC',
   SysIdDesc = 'sys_id_DESC',
   SysPublishedAtAsc = 'sys_publishedAt_ASC',
   SysPublishedAtDesc = 'sys_publishedAt_DESC',
   SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
   SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
   TwitterAsc = 'twitter_ASC',
   TwitterDesc = 'twitter_DESC',
}

/** [See type definition](https://app.contentful.com/spaces/jcu0yamxms9o/content_types/category) */
export type Category = Entry & {
   __typename?: 'Category';
   categoryDescription?: Maybe<Scalars['String']>;
   color?: Maybe<Scalars['String']>;
   contentfulMetadata: ContentfulMetadata;
   icon?: Maybe<Asset>;
   linkedFrom?: Maybe<CategoryLinkingCollections>;
   slug?: Maybe<Scalars['String']>;
   sys: Sys;
   title?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/jcu0yamxms9o/content_types/category) */
export type CategoryCategoryDescriptionArgs = {
   locale?: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/jcu0yamxms9o/content_types/category) */
export type CategoryColorArgs = {
   locale?: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/jcu0yamxms9o/content_types/category) */
export type CategoryIconArgs = {
   locale?: InputMaybe<Scalars['String']>;
   preview?: InputMaybe<Scalars['Boolean']>;
};

/** [See type definition](https://app.contentful.com/spaces/jcu0yamxms9o/content_types/category) */
export type CategoryLinkedFromArgs = {
   allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/jcu0yamxms9o/content_types/category) */
export type CategorySlugArgs = {
   locale?: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/jcu0yamxms9o/content_types/category) */
export type CategoryTitleArgs = {
   locale?: InputMaybe<Scalars['String']>;
};

export type CategoryCollection = {
   __typename?: 'CategoryCollection';
   items: Array<Maybe<Category>>;
   limit: Scalars['Int'];
   skip: Scalars['Int'];
   total: Scalars['Int'];
};

export type CategoryFilter = {
   AND?: InputMaybe<Array<InputMaybe<CategoryFilter>>>;
   OR?: InputMaybe<Array<InputMaybe<CategoryFilter>>>;
   categoryDescription?: InputMaybe<Scalars['String']>;
   categoryDescription_contains?: InputMaybe<Scalars['String']>;
   categoryDescription_exists?: InputMaybe<Scalars['Boolean']>;
   categoryDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
   categoryDescription_not?: InputMaybe<Scalars['String']>;
   categoryDescription_not_contains?: InputMaybe<Scalars['String']>;
   categoryDescription_not_in?: InputMaybe<
      Array<InputMaybe<Scalars['String']>>
   >;
   color?: InputMaybe<Scalars['String']>;
   color_contains?: InputMaybe<Scalars['String']>;
   color_exists?: InputMaybe<Scalars['Boolean']>;
   color_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
   color_not?: InputMaybe<Scalars['String']>;
   color_not_contains?: InputMaybe<Scalars['String']>;
   color_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
   contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
   icon_exists?: InputMaybe<Scalars['Boolean']>;
   slug?: InputMaybe<Scalars['String']>;
   slug_contains?: InputMaybe<Scalars['String']>;
   slug_exists?: InputMaybe<Scalars['Boolean']>;
   slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
   slug_not?: InputMaybe<Scalars['String']>;
   slug_not_contains?: InputMaybe<Scalars['String']>;
   slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
   sys?: InputMaybe<SysFilter>;
   title?: InputMaybe<Scalars['String']>;
   title_contains?: InputMaybe<Scalars['String']>;
   title_exists?: InputMaybe<Scalars['Boolean']>;
   title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
   title_not?: InputMaybe<Scalars['String']>;
   title_not_contains?: InputMaybe<Scalars['String']>;
   title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CategoryLinkingCollections = {
   __typename?: 'CategoryLinkingCollections';
   entryCollection?: Maybe<EntryCollection>;
   plantCollection?: Maybe<PlantCollection>;
};

export type CategoryLinkingCollectionsEntryCollectionArgs = {
   limit?: InputMaybe<Scalars['Int']>;
   locale?: InputMaybe<Scalars['String']>;
   preview?: InputMaybe<Scalars['Boolean']>;
   skip?: InputMaybe<Scalars['Int']>;
};

export type CategoryLinkingCollectionsPlantCollectionArgs = {
   limit?: InputMaybe<Scalars['Int']>;
   locale?: InputMaybe<Scalars['String']>;
   preview?: InputMaybe<Scalars['Boolean']>;
   skip?: InputMaybe<Scalars['Int']>;
};

export enum CategoryOrder {
   ColorAsc = 'color_ASC',
   ColorDesc = 'color_DESC',
   SlugAsc = 'slug_ASC',
   SlugDesc = 'slug_DESC',
   SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
   SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
   SysIdAsc = 'sys_id_ASC',
   SysIdDesc = 'sys_id_DESC',
   SysPublishedAtAsc = 'sys_publishedAt_ASC',
   SysPublishedAtDesc = 'sys_publishedAt_DESC',
   SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
   SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type ContentfulMetadata = {
   __typename?: 'ContentfulMetadata';
   tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataFilter = {
   tags?: InputMaybe<ContentfulMetadataTagsFilter>;
   tags_exists?: InputMaybe<Scalars['Boolean']>;
};

export type ContentfulMetadataTagsFilter = {
   id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
   id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
   id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *     Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
   __typename?: 'ContentfulTag';
   id?: Maybe<Scalars['String']>;
   name?: Maybe<Scalars['String']>;
};

export type Entry = {
   contentfulMetadata: ContentfulMetadata;
   sys: Sys;
};

export type EntryCollection = {
   __typename?: 'EntryCollection';
   items: Array<Maybe<Entry>>;
   limit: Scalars['Int'];
   skip: Scalars['Int'];
   total: Scalars['Int'];
};

export type EntryFilter = {
   AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
   OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
   contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
   sys?: InputMaybe<SysFilter>;
};

export enum EntryOrder {
   SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
   SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
   SysIdAsc = 'sys_id_ASC',
   SysIdDesc = 'sys_id_DESC',
   SysPublishedAtAsc = 'sys_publishedAt_ASC',
   SysPublishedAtDesc = 'sys_publishedAt_DESC',
   SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
   SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export enum ImageFormat {
   Avif = 'AVIF',
   /** JPG image format. */
   Jpg = 'JPG',
   /**
    * Progressive JPG format stores multiple passes of an image in progressively higher detail.
    *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
    *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
    *         early as possible to make the layout look as designed.
    */
   JpgProgressive = 'JPG_PROGRESSIVE',
   /** PNG image format */
   Png = 'PNG',
   /**
    * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
    *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
    */
   Png8 = 'PNG8',
   /** WebP image format. */
   Webp = 'WEBP',
}

export enum ImageResizeFocus {
   /** Focus the resizing on the bottom. */
   Bottom = 'BOTTOM',
   /** Focus the resizing on the bottom left. */
   BottomLeft = 'BOTTOM_LEFT',
   /** Focus the resizing on the bottom right. */
   BottomRight = 'BOTTOM_RIGHT',
   /** Focus the resizing on the center. */
   Center = 'CENTER',
   /** Focus the resizing on the largest face. */
   Face = 'FACE',
   /** Focus the resizing on the area containing all the faces. */
   Faces = 'FACES',
   /** Focus the resizing on the left. */
   Left = 'LEFT',
   /** Focus the resizing on the right. */
   Right = 'RIGHT',
   /** Focus the resizing on the top. */
   Top = 'TOP',
   /** Focus the resizing on the top left. */
   TopLeft = 'TOP_LEFT',
   /** Focus the resizing on the top right. */
   TopRight = 'TOP_RIGHT',
}

export enum ImageResizeStrategy {
   /** Crops a part of the original image to fit into the specified dimensions. */
   Crop = 'CROP',
   /** Resizes the image to the specified dimensions, cropping the image if needed. */
   Fill = 'FILL',
   /** Resizes the image to fit into the specified dimensions. */
   Fit = 'FIT',
   /**
    * Resizes the image to the specified dimensions, padding the image if needed.
    *         Uses desired background color as padding color.
    */
   Pad = 'PAD',
   /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
   Scale = 'SCALE',
   /** Creates a thumbnail from the image. */
   Thumb = 'THUMB',
}

export type ImageTransformOptions = {
   /**
    * Desired background color, used with corner radius or `PAD` resize strategy.
    *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
    */
   backgroundColor?: InputMaybe<Scalars['HexColor']>;
   /**
    * Desired corner radius in pixels.
    *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
    *         Defaults to `0`. Uses desired background color as padding color,
    *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
    */
   cornerRadius?: InputMaybe<Scalars['Int']>;
   /** Desired image format. Defaults to the original image format. */
   format?: InputMaybe<ImageFormat>;
   /** Desired height in pixels. Defaults to the original image height. */
   height?: InputMaybe<Scalars['Dimension']>;
   /**
    * Desired quality of the image in percents.
    *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
    */
   quality?: InputMaybe<Scalars['Quality']>;
   /** Desired resize focus area. Defaults to `CENTER`. */
   resizeFocus?: InputMaybe<ImageResizeFocus>;
   /** Desired resize strategy. Defaults to `FIT`. */
   resizeStrategy?: InputMaybe<ImageResizeStrategy>;
   /** Desired width in pixels. Defaults to the original image width. */
   width?: InputMaybe<Scalars['Dimension']>;
};

/** [See type definition](https://app.contentful.com/spaces/jcu0yamxms9o/content_types/plant) */
export type Plant = Entry & {
   __typename?: 'Plant';
   author?: Maybe<Author>;
   category?: Maybe<Category>;
   contentfulMetadata: ContentfulMetadata;
   description?: Maybe<PlantDescription>;
   image?: Maybe<Asset>;
   linkedFrom?: Maybe<PlantLinkingCollections>;
   plantName?: Maybe<Scalars['String']>;
   slug?: Maybe<Scalars['String']>;
   sys: Sys;
};

/** [See type definition](https://app.contentful.com/spaces/jcu0yamxms9o/content_types/plant) */
export type PlantAuthorArgs = {
   locale?: InputMaybe<Scalars['String']>;
   preview?: InputMaybe<Scalars['Boolean']>;
};

/** [See type definition](https://app.contentful.com/spaces/jcu0yamxms9o/content_types/plant) */
export type PlantCategoryArgs = {
   locale?: InputMaybe<Scalars['String']>;
   preview?: InputMaybe<Scalars['Boolean']>;
};

/** [See type definition](https://app.contentful.com/spaces/jcu0yamxms9o/content_types/plant) */
export type PlantDescriptionArgs = {
   locale?: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/jcu0yamxms9o/content_types/plant) */
export type PlantImageArgs = {
   locale?: InputMaybe<Scalars['String']>;
   preview?: InputMaybe<Scalars['Boolean']>;
};

/** [See type definition](https://app.contentful.com/spaces/jcu0yamxms9o/content_types/plant) */
export type PlantLinkedFromArgs = {
   allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/jcu0yamxms9o/content_types/plant) */
export type PlantPlantNameArgs = {
   locale?: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/jcu0yamxms9o/content_types/plant) */
export type PlantSlugArgs = {
   locale?: InputMaybe<Scalars['String']>;
};

export type PlantCollection = {
   __typename?: 'PlantCollection';
   items: Array<Maybe<Plant>>;
   limit: Scalars['Int'];
   skip: Scalars['Int'];
   total: Scalars['Int'];
};

export type PlantDescription = {
   __typename?: 'PlantDescription';
   json: Scalars['JSON'];
   links: PlantDescriptionLinks;
};

export type PlantDescriptionAssets = {
   __typename?: 'PlantDescriptionAssets';
   block: Array<Maybe<Asset>>;
   hyperlink: Array<Maybe<Asset>>;
};

export type PlantDescriptionEntries = {
   __typename?: 'PlantDescriptionEntries';
   block: Array<Maybe<Entry>>;
   hyperlink: Array<Maybe<Entry>>;
   inline: Array<Maybe<Entry>>;
};

export type PlantDescriptionLinks = {
   __typename?: 'PlantDescriptionLinks';
   assets: PlantDescriptionAssets;
   entries: PlantDescriptionEntries;
};

export type PlantFilter = {
   AND?: InputMaybe<Array<InputMaybe<PlantFilter>>>;
   OR?: InputMaybe<Array<InputMaybe<PlantFilter>>>;
   author?: InputMaybe<CfAuthorNestedFilter>;
   author_exists?: InputMaybe<Scalars['Boolean']>;
   category?: InputMaybe<CfCategoryNestedFilter>;
   category_exists?: InputMaybe<Scalars['Boolean']>;
   contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
   description_contains?: InputMaybe<Scalars['String']>;
   description_exists?: InputMaybe<Scalars['Boolean']>;
   description_not_contains?: InputMaybe<Scalars['String']>;
   image_exists?: InputMaybe<Scalars['Boolean']>;
   plantName?: InputMaybe<Scalars['String']>;
   plantName_contains?: InputMaybe<Scalars['String']>;
   plantName_exists?: InputMaybe<Scalars['Boolean']>;
   plantName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
   plantName_not?: InputMaybe<Scalars['String']>;
   plantName_not_contains?: InputMaybe<Scalars['String']>;
   plantName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
   slug?: InputMaybe<Scalars['String']>;
   slug_contains?: InputMaybe<Scalars['String']>;
   slug_exists?: InputMaybe<Scalars['Boolean']>;
   slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
   slug_not?: InputMaybe<Scalars['String']>;
   slug_not_contains?: InputMaybe<Scalars['String']>;
   slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
   sys?: InputMaybe<SysFilter>;
};

export type PlantLinkingCollections = {
   __typename?: 'PlantLinkingCollections';
   entryCollection?: Maybe<EntryCollection>;
};

export type PlantLinkingCollectionsEntryCollectionArgs = {
   limit?: InputMaybe<Scalars['Int']>;
   locale?: InputMaybe<Scalars['String']>;
   preview?: InputMaybe<Scalars['Boolean']>;
   skip?: InputMaybe<Scalars['Int']>;
};

export enum PlantOrder {
   SlugAsc = 'slug_ASC',
   SlugDesc = 'slug_DESC',
   SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
   SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
   SysIdAsc = 'sys_id_ASC',
   SysIdDesc = 'sys_id_DESC',
   SysPublishedAtAsc = 'sys_publishedAt_ASC',
   SysPublishedAtDesc = 'sys_publishedAt_DESC',
   SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
   SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type Query = {
   __typename?: 'Query';
   asset?: Maybe<Asset>;
   assetCollection?: Maybe<AssetCollection>;
   author?: Maybe<Author>;
   authorCollection?: Maybe<AuthorCollection>;
   category?: Maybe<Category>;
   categoryCollection?: Maybe<CategoryCollection>;
   entryCollection?: Maybe<EntryCollection>;
   plant?: Maybe<Plant>;
   plantCollection?: Maybe<PlantCollection>;
};

export type QueryAssetArgs = {
   id: Scalars['String'];
   locale?: InputMaybe<Scalars['String']>;
   preview?: InputMaybe<Scalars['Boolean']>;
};

export type QueryAssetCollectionArgs = {
   limit?: InputMaybe<Scalars['Int']>;
   locale?: InputMaybe<Scalars['String']>;
   order?: InputMaybe<Array<InputMaybe<AssetOrder>>>;
   preview?: InputMaybe<Scalars['Boolean']>;
   skip?: InputMaybe<Scalars['Int']>;
   where?: InputMaybe<AssetFilter>;
};

export type QueryAuthorArgs = {
   id: Scalars['String'];
   locale?: InputMaybe<Scalars['String']>;
   preview?: InputMaybe<Scalars['Boolean']>;
};

export type QueryAuthorCollectionArgs = {
   limit?: InputMaybe<Scalars['Int']>;
   locale?: InputMaybe<Scalars['String']>;
   order?: InputMaybe<Array<InputMaybe<AuthorOrder>>>;
   preview?: InputMaybe<Scalars['Boolean']>;
   skip?: InputMaybe<Scalars['Int']>;
   where?: InputMaybe<AuthorFilter>;
};

export type QueryCategoryArgs = {
   id: Scalars['String'];
   locale?: InputMaybe<Scalars['String']>;
   preview?: InputMaybe<Scalars['Boolean']>;
};

export type QueryCategoryCollectionArgs = {
   limit?: InputMaybe<Scalars['Int']>;
   locale?: InputMaybe<Scalars['String']>;
   order?: InputMaybe<Array<InputMaybe<CategoryOrder>>>;
   preview?: InputMaybe<Scalars['Boolean']>;
   skip?: InputMaybe<Scalars['Int']>;
   where?: InputMaybe<CategoryFilter>;
};

export type QueryEntryCollectionArgs = {
   limit?: InputMaybe<Scalars['Int']>;
   locale?: InputMaybe<Scalars['String']>;
   order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
   preview?: InputMaybe<Scalars['Boolean']>;
   skip?: InputMaybe<Scalars['Int']>;
   where?: InputMaybe<EntryFilter>;
};

export type QueryPlantArgs = {
   id: Scalars['String'];
   locale?: InputMaybe<Scalars['String']>;
   preview?: InputMaybe<Scalars['Boolean']>;
};

export type QueryPlantCollectionArgs = {
   limit?: InputMaybe<Scalars['Int']>;
   locale?: InputMaybe<Scalars['String']>;
   order?: InputMaybe<Array<InputMaybe<PlantOrder>>>;
   preview?: InputMaybe<Scalars['Boolean']>;
   skip?: InputMaybe<Scalars['Int']>;
   where?: InputMaybe<PlantFilter>;
};

export type Sys = {
   __typename?: 'Sys';
   environmentId: Scalars['String'];
   firstPublishedAt?: Maybe<Scalars['DateTime']>;
   id: Scalars['String'];
   publishedAt?: Maybe<Scalars['DateTime']>;
   publishedVersion?: Maybe<Scalars['Int']>;
   spaceId: Scalars['String'];
};

export type SysFilter = {
   firstPublishedAt?: InputMaybe<Scalars['DateTime']>;
   firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']>;
   firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']>;
   firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']>;
   firstPublishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
   firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']>;
   firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']>;
   firstPublishedAt_not?: InputMaybe<Scalars['DateTime']>;
   firstPublishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
   id?: InputMaybe<Scalars['String']>;
   id_contains?: InputMaybe<Scalars['String']>;
   id_exists?: InputMaybe<Scalars['Boolean']>;
   id_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
   id_not?: InputMaybe<Scalars['String']>;
   id_not_contains?: InputMaybe<Scalars['String']>;
   id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
   publishedAt?: InputMaybe<Scalars['DateTime']>;
   publishedAt_exists?: InputMaybe<Scalars['Boolean']>;
   publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
   publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
   publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
   publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
   publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
   publishedAt_not?: InputMaybe<Scalars['DateTime']>;
   publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
   publishedVersion?: InputMaybe<Scalars['Float']>;
   publishedVersion_exists?: InputMaybe<Scalars['Boolean']>;
   publishedVersion_gt?: InputMaybe<Scalars['Float']>;
   publishedVersion_gte?: InputMaybe<Scalars['Float']>;
   publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
   publishedVersion_lt?: InputMaybe<Scalars['Float']>;
   publishedVersion_lte?: InputMaybe<Scalars['Float']>;
   publishedVersion_not?: InputMaybe<Scalars['Float']>;
   publishedVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type CfAuthorNestedFilter = {
   AND?: InputMaybe<Array<InputMaybe<CfAuthorNestedFilter>>>;
   OR?: InputMaybe<Array<InputMaybe<CfAuthorNestedFilter>>>;
   biography?: InputMaybe<Scalars['String']>;
   biography_contains?: InputMaybe<Scalars['String']>;
   biography_exists?: InputMaybe<Scalars['Boolean']>;
   biography_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
   biography_not?: InputMaybe<Scalars['String']>;
   biography_not_contains?: InputMaybe<Scalars['String']>;
   biography_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
   contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
   fullName?: InputMaybe<Scalars['String']>;
   fullName_contains?: InputMaybe<Scalars['String']>;
   fullName_exists?: InputMaybe<Scalars['Boolean']>;
   fullName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
   fullName_not?: InputMaybe<Scalars['String']>;
   fullName_not_contains?: InputMaybe<Scalars['String']>;
   fullName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
   handle?: InputMaybe<Scalars['String']>;
   handle_contains?: InputMaybe<Scalars['String']>;
   handle_exists?: InputMaybe<Scalars['Boolean']>;
   handle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
   handle_not?: InputMaybe<Scalars['String']>;
   handle_not_contains?: InputMaybe<Scalars['String']>;
   handle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
   linkedIn?: InputMaybe<Scalars['String']>;
   linkedIn_contains?: InputMaybe<Scalars['String']>;
   linkedIn_exists?: InputMaybe<Scalars['Boolean']>;
   linkedIn_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
   linkedIn_not?: InputMaybe<Scalars['String']>;
   linkedIn_not_contains?: InputMaybe<Scalars['String']>;
   linkedIn_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
   photo_exists?: InputMaybe<Scalars['Boolean']>;
   sys?: InputMaybe<SysFilter>;
   twitter?: InputMaybe<Scalars['String']>;
   twitter_contains?: InputMaybe<Scalars['String']>;
   twitter_exists?: InputMaybe<Scalars['Boolean']>;
   twitter_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
   twitter_not?: InputMaybe<Scalars['String']>;
   twitter_not_contains?: InputMaybe<Scalars['String']>;
   twitter_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CfCategoryNestedFilter = {
   AND?: InputMaybe<Array<InputMaybe<CfCategoryNestedFilter>>>;
   OR?: InputMaybe<Array<InputMaybe<CfCategoryNestedFilter>>>;
   categoryDescription?: InputMaybe<Scalars['String']>;
   categoryDescription_contains?: InputMaybe<Scalars['String']>;
   categoryDescription_exists?: InputMaybe<Scalars['Boolean']>;
   categoryDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
   categoryDescription_not?: InputMaybe<Scalars['String']>;
   categoryDescription_not_contains?: InputMaybe<Scalars['String']>;
   categoryDescription_not_in?: InputMaybe<
      Array<InputMaybe<Scalars['String']>>
   >;
   color?: InputMaybe<Scalars['String']>;
   color_contains?: InputMaybe<Scalars['String']>;
   color_exists?: InputMaybe<Scalars['Boolean']>;
   color_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
   color_not?: InputMaybe<Scalars['String']>;
   color_not_contains?: InputMaybe<Scalars['String']>;
   color_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
   contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
   icon_exists?: InputMaybe<Scalars['Boolean']>;
   slug?: InputMaybe<Scalars['String']>;
   slug_contains?: InputMaybe<Scalars['String']>;
   slug_exists?: InputMaybe<Scalars['Boolean']>;
   slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
   slug_not?: InputMaybe<Scalars['String']>;
   slug_not_contains?: InputMaybe<Scalars['String']>;
   slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
   sys?: InputMaybe<SysFilter>;
   title?: InputMaybe<Scalars['String']>;
   title_contains?: InputMaybe<Scalars['String']>;
   title_exists?: InputMaybe<Scalars['Boolean']>;
   title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
   title_not?: InputMaybe<Scalars['String']>;
   title_not_contains?: InputMaybe<Scalars['String']>;
   title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type GetPlantsQueryVariables = Exact<{ [key: string]: never }>;

export type GetPlantsQuery = {
   __typename?: 'Query';
   plantCollection?: {
      __typename?: 'PlantCollection';
      items: Array<{
         __typename?: 'Plant';
         plantName?: string | null;
         slug?: string | null;
         image?: { __typename?: 'Asset'; url?: string | null } | null;
         sys: { __typename?: 'Sys'; id: string };
      } | null>;
   } | null;
};

export type GetPlantsInfiniteQueryVariables = Exact<{
   limit: Scalars['Int'];
   skip: Scalars['Int'];
}>;

export type GetPlantsInfiniteQuery = {
   __typename?: 'Query';
   plantCollection?: {
      __typename?: 'PlantCollection';
      total: number;
      items: Array<{
         __typename?: 'Plant';
         plantName?: string | null;
         slug?: string | null;
         image?: { __typename?: 'Asset'; url?: string | null } | null;
         category?: { __typename?: 'Category'; title?: string | null } | null;
         sys: { __typename?: 'Sys'; id: string };
      } | null>;
   } | null;
};

export type GetCategoriesTitleQueryVariables = Exact<{ [key: string]: never }>;

export type GetCategoriesTitleQuery = {
   __typename?: 'Query';
   categoryCollection?: {
      __typename?: 'CategoryCollection';
      items: Array<{
         __typename?: 'Category';
         title?: string | null;
         slug?: string | null;
      } | null>;
   } | null;
};

export type GetPlantsByCategoryQueryVariables = Exact<{
   category: Scalars['String'];
}>;

export type GetPlantsByCategoryQuery = {
   __typename?: 'Query';
   plantCollection?: {
      __typename?: 'PlantCollection';
      items: Array<{
         __typename?: 'Plant';
         plantName?: string | null;
         slug?: string | null;
         image?: { __typename?: 'Asset'; url?: string | null } | null;
         category?: {
            __typename?: 'Category';
            title?: string | null;
            color?: string | null;
            slug?: string | null;
         } | null;
         sys: { __typename?: 'Sys'; id: string };
      } | null>;
   } | null;
};

export type GetPlantsByCategoryInfiniteQueryVariables = Exact<{
   category: Scalars['String'];
   limit: Scalars['Int'];
   skip: Scalars['Int'];
}>;

export type GetPlantsByCategoryInfiniteQuery = {
   __typename?: 'Query';
   plantCollection?: {
      __typename?: 'PlantCollection';
      total: number;
      items: Array<{
         __typename?: 'Plant';
         plantName?: string | null;
         slug?: string | null;
         image?: { __typename?: 'Asset'; url?: string | null } | null;
         category?: {
            __typename?: 'Category';
            title?: string | null;
            color?: string | null;
            slug?: string | null;
         } | null;
         sys: { __typename?: 'Sys'; id: string };
      } | null>;
   } | null;
};

export type CountPlantsByCategoryQueryVariables = Exact<{
   category: Scalars['String'];
}>;

export type CountPlantsByCategoryQuery = {
   __typename?: 'Query';
   plantCollection?: { __typename?: 'PlantCollection'; total: number } | null;
};

export type GetCategoryBySlugQueryVariables = Exact<{
   slug: Scalars['String'];
}>;

export type GetCategoryBySlugQuery = {
   __typename?: 'Query';
   categoryCollection?: {
      __typename?: 'CategoryCollection';
      items: Array<{
         __typename?: 'Category';
         title?: string | null;
         color?: string | null;
         slug?: string | null;
         categoryDescription?: string | null;
         sys: { __typename?: 'Sys'; id: string };
      } | null>;
   } | null;
};

export type GetCategoryByIdQueryVariables = Exact<{
   id: Scalars['String'];
}>;

export type GetCategoryByIdQuery = {
   __typename?: 'Query';
   category?: {
      __typename?: 'Category';
      title?: string | null;
      color?: string | null;
      slug?: string | null;
      categoryDescription?: string | null;
      sys: { __typename?: 'Sys'; id: string };
   } | null;
};

export type GetPlantsSlugsQueryVariables = Exact<{ [key: string]: never }>;

export type GetPlantsSlugsQuery = {
   __typename?: 'Query';
   plantCollection?: {
      __typename?: 'PlantCollection';
      items: Array<{ __typename?: 'Plant'; slug?: string | null } | null>;
   } | null;
};

export type GetPlantBySlugQueryVariables = Exact<{
   slug: Scalars['String'];
}>;

export type GetPlantBySlugQuery = {
   __typename?: 'Query';
   plantCollection?: {
      __typename?: 'PlantCollection';
      items: Array<{
         __typename?: 'Plant';
         plantName?: string | null;
         slug?: string | null;
         image?: { __typename?: 'Asset'; url?: string | null } | null;
         description?: { __typename?: 'PlantDescription'; json: any } | null;
         category?: {
            __typename?: 'Category';
            title?: string | null;
            color?: string | null;
            slug?: string | null;
         } | null;
         sys: { __typename?: 'Sys'; id: string };
         author?: {
            __typename?: 'Author';
            fullName?: string | null;
            sys: { __typename?: 'Sys'; id: string };
         } | null;
      } | null>;
   } | null;
};

export type GetAuthorByIdQueryVariables = Exact<{
   id: Scalars['String'];
}>;

export type GetAuthorByIdQuery = {
   __typename?: 'Query';
   author?: {
      __typename?: 'Author';
      fullName?: string | null;
      biography?: string | null;
      twitter?: string | null;
      linkedIn?: string | null;
      photo?: {
         __typename?: 'Asset';
         url?: string | null;
         title?: string | null;
         height?: number | null;
         width?: number | null;
      } | null;
      sys: { __typename?: 'Sys'; id: string };
      linkedFrom?: {
         __typename?: 'AuthorLinkingCollections';
         plantCollection?: {
            __typename?: 'PlantCollection';
            items: Array<{
               __typename?: 'Plant';
               slug?: string | null;
               plantName?: string | null;
               sys: { __typename?: 'Sys'; id: string };
            } | null>;
         } | null;
      } | null;
   } | null;
};

export type GetAuthorIdsQueryVariables = Exact<{ [key: string]: never }>;

export type GetAuthorIdsQuery = {
   __typename?: 'Query';
   authorCollection?: {
      __typename?: 'AuthorCollection';
      items: Array<{
         __typename?: 'Author';
         sys: { __typename?: 'Sys'; id: string };
      } | null>;
   } | null;
};

export type GetPlantsByAuthorQueryVariables = Exact<{
   id?: InputMaybe<Scalars['String']>;
}>;

export type GetPlantsByAuthorQuery = {
   __typename?: 'Query';
   plantCollection?: {
      __typename?: 'PlantCollection';
      items: Array<{
         __typename?: 'Plant';
         plantName?: string | null;
         slug?: string | null;
         sys: { __typename?: 'Sys'; id: string };
      } | null>;
   } | null;
};

export type GetAuthorImageByIdQueryVariables = Exact<{
   id: Scalars['String'];
}>;

export type GetAuthorImageByIdQuery = {
   __typename?: 'Query';
   author?: {
      __typename?: 'Author';
      photo?: {
         __typename?: 'Asset';
         url?: string | null;
         title?: string | null;
      } | null;
   } | null;
};

export type GetAuthorHandleAndIdsQueryVariables = Exact<{
   [key: string]: never;
}>;

export type GetAuthorHandleAndIdsQuery = {
   __typename?: 'Query';
   authorCollection?: {
      __typename?: 'AuthorCollection';
      items: Array<{
         __typename?: 'Author';
         handle?: string | null;
         sys: { __typename?: 'Sys'; id: string };
      } | null>;
   } | null;
};

export type GetPlantsWithAuthorsQueryVariables = Exact<{
   [key: string]: never;
}>;

export type GetPlantsWithAuthorsQuery = {
   __typename?: 'Query';
   plantCollection?: {
      __typename?: 'PlantCollection';
      items: Array<{
         __typename?: 'Plant';
         sys: { __typename?: 'Sys'; id: string; firstPublishedAt?: any | null };
         author?: {
            __typename?: 'Author';
            sys: { __typename?: 'Sys'; id: string };
         } | null;
      } | null>;
   } | null;
};

export const GetPlantsDocument = gql`
   query GetPlants {
      plantCollection(limit: 10, skip: 2) {
         items {
            plantName
            image {
               url
            }
            slug
            sys {
               id
            }
         }
      }
   }
`;

/**
 * __useGetPlantsQuery__
 *
 * To run a query within a React component, call `useGetPlantsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPlantsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPlantsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPlantsQuery(
   baseOptions?: Apollo.QueryHookOptions<
      GetPlantsQuery,
      GetPlantsQueryVariables
   >
) {
   const options = { ...defaultOptions, ...baseOptions };
   return Apollo.useQuery<GetPlantsQuery, GetPlantsQueryVariables>(
      GetPlantsDocument,
      options
   );
}

export function useGetPlantsLazyQuery(
   baseOptions?: Apollo.LazyQueryHookOptions<
      GetPlantsQuery,
      GetPlantsQueryVariables
   >
) {
   const options = { ...defaultOptions, ...baseOptions };
   return Apollo.useLazyQuery<GetPlantsQuery, GetPlantsQueryVariables>(
      GetPlantsDocument,
      options
   );
}

export type GetPlantsQueryHookResult = ReturnType<typeof useGetPlantsQuery>;
export type GetPlantsLazyQueryHookResult = ReturnType<
   typeof useGetPlantsLazyQuery
>;
export type GetPlantsQueryResult = Apollo.QueryResult<
   GetPlantsQuery,
   GetPlantsQueryVariables
>;
export const GetPlantsInfiniteDocument = gql`
   query GetPlantsInfinite($limit: Int!, $skip: Int!) {
      plantCollection(limit: $limit, skip: $skip) {
         total
         items {
            plantName
            image {
               url
            }
            slug
            category {
               title
            }
            sys {
               id
            }
         }
      }
   }
`;

/**
 * __useGetPlantsInfiniteQuery__
 *
 * To run a query within a React component, call `useGetPlantsInfiniteQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPlantsInfiniteQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPlantsInfiniteQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      skip: // value for 'skip'
 *   },
 * });
 */
export function useGetPlantsInfiniteQuery(
   baseOptions: Apollo.QueryHookOptions<
      GetPlantsInfiniteQuery,
      GetPlantsInfiniteQueryVariables
   >
) {
   const options = { ...defaultOptions, ...baseOptions };
   return Apollo.useQuery<
      GetPlantsInfiniteQuery,
      GetPlantsInfiniteQueryVariables
   >(GetPlantsInfiniteDocument, options);
}

export function useGetPlantsInfiniteLazyQuery(
   baseOptions?: Apollo.LazyQueryHookOptions<
      GetPlantsInfiniteQuery,
      GetPlantsInfiniteQueryVariables
   >
) {
   const options = { ...defaultOptions, ...baseOptions };
   return Apollo.useLazyQuery<
      GetPlantsInfiniteQuery,
      GetPlantsInfiniteQueryVariables
   >(GetPlantsInfiniteDocument, options);
}

export type GetPlantsInfiniteQueryHookResult = ReturnType<
   typeof useGetPlantsInfiniteQuery
>;
export type GetPlantsInfiniteLazyQueryHookResult = ReturnType<
   typeof useGetPlantsInfiniteLazyQuery
>;
export type GetPlantsInfiniteQueryResult = Apollo.QueryResult<
   GetPlantsInfiniteQuery,
   GetPlantsInfiniteQueryVariables
>;
export const GetCategoriesTitleDocument = gql`
   query GetCategoriesTitle {
      categoryCollection {
         items {
            title
            slug
         }
      }
   }
`;

/**
 * __useGetCategoriesTitleQuery__
 *
 * To run a query within a React component, call `useGetCategoriesTitleQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCategoriesTitleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCategoriesTitleQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCategoriesTitleQuery(
   baseOptions?: Apollo.QueryHookOptions<
      GetCategoriesTitleQuery,
      GetCategoriesTitleQueryVariables
   >
) {
   const options = { ...defaultOptions, ...baseOptions };
   return Apollo.useQuery<
      GetCategoriesTitleQuery,
      GetCategoriesTitleQueryVariables
   >(GetCategoriesTitleDocument, options);
}

export function useGetCategoriesTitleLazyQuery(
   baseOptions?: Apollo.LazyQueryHookOptions<
      GetCategoriesTitleQuery,
      GetCategoriesTitleQueryVariables
   >
) {
   const options = { ...defaultOptions, ...baseOptions };
   return Apollo.useLazyQuery<
      GetCategoriesTitleQuery,
      GetCategoriesTitleQueryVariables
   >(GetCategoriesTitleDocument, options);
}

export type GetCategoriesTitleQueryHookResult = ReturnType<
   typeof useGetCategoriesTitleQuery
>;
export type GetCategoriesTitleLazyQueryHookResult = ReturnType<
   typeof useGetCategoriesTitleLazyQuery
>;
export type GetCategoriesTitleQueryResult = Apollo.QueryResult<
   GetCategoriesTitleQuery,
   GetCategoriesTitleQueryVariables
>;
export const GetPlantsByCategoryDocument = gql`
   query GetPlantsByCategory($category: String!) {
      plantCollection(where: { category: { slug: $category } }) {
         items {
            plantName
            image {
               url
            }
            slug
            category {
               title
               color
               slug
            }
            sys {
               id
            }
         }
      }
   }
`;

/**
 * __useGetPlantsByCategoryQuery__
 *
 * To run a query within a React component, call `useGetPlantsByCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPlantsByCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPlantsByCategoryQuery({
 *   variables: {
 *      category: // value for 'category'
 *   },
 * });
 */
export function useGetPlantsByCategoryQuery(
   baseOptions: Apollo.QueryHookOptions<
      GetPlantsByCategoryQuery,
      GetPlantsByCategoryQueryVariables
   >
) {
   const options = { ...defaultOptions, ...baseOptions };
   return Apollo.useQuery<
      GetPlantsByCategoryQuery,
      GetPlantsByCategoryQueryVariables
   >(GetPlantsByCategoryDocument, options);
}

export function useGetPlantsByCategoryLazyQuery(
   baseOptions?: Apollo.LazyQueryHookOptions<
      GetPlantsByCategoryQuery,
      GetPlantsByCategoryQueryVariables
   >
) {
   const options = { ...defaultOptions, ...baseOptions };
   return Apollo.useLazyQuery<
      GetPlantsByCategoryQuery,
      GetPlantsByCategoryQueryVariables
   >(GetPlantsByCategoryDocument, options);
}

export type GetPlantsByCategoryQueryHookResult = ReturnType<
   typeof useGetPlantsByCategoryQuery
>;
export type GetPlantsByCategoryLazyQueryHookResult = ReturnType<
   typeof useGetPlantsByCategoryLazyQuery
>;
export type GetPlantsByCategoryQueryResult = Apollo.QueryResult<
   GetPlantsByCategoryQuery,
   GetPlantsByCategoryQueryVariables
>;
export const GetPlantsByCategoryInfiniteDocument = gql`
   query GetPlantsByCategoryInfinite(
      $category: String!
      $limit: Int!
      $skip: Int!
   ) {
      plantCollection(
         where: { category: { slug: $category } }
         limit: $limit
         skip: $skip
      ) {
         total
         items {
            plantName
            image {
               url
            }
            slug
            category {
               title
               color
               slug
            }
            sys {
               id
            }
         }
      }
   }
`;

/**
 * __useGetPlantsByCategoryInfiniteQuery__
 *
 * To run a query within a React component, call `useGetPlantsByCategoryInfiniteQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPlantsByCategoryInfiniteQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPlantsByCategoryInfiniteQuery({
 *   variables: {
 *      category: // value for 'category'
 *      limit: // value for 'limit'
 *      skip: // value for 'skip'
 *   },
 * });
 */
export function useGetPlantsByCategoryInfiniteQuery(
   baseOptions: Apollo.QueryHookOptions<
      GetPlantsByCategoryInfiniteQuery,
      GetPlantsByCategoryInfiniteQueryVariables
   >
) {
   const options = { ...defaultOptions, ...baseOptions };
   return Apollo.useQuery<
      GetPlantsByCategoryInfiniteQuery,
      GetPlantsByCategoryInfiniteQueryVariables
   >(GetPlantsByCategoryInfiniteDocument, options);
}

export function useGetPlantsByCategoryInfiniteLazyQuery(
   baseOptions?: Apollo.LazyQueryHookOptions<
      GetPlantsByCategoryInfiniteQuery,
      GetPlantsByCategoryInfiniteQueryVariables
   >
) {
   const options = { ...defaultOptions, ...baseOptions };
   return Apollo.useLazyQuery<
      GetPlantsByCategoryInfiniteQuery,
      GetPlantsByCategoryInfiniteQueryVariables
   >(GetPlantsByCategoryInfiniteDocument, options);
}

export type GetPlantsByCategoryInfiniteQueryHookResult = ReturnType<
   typeof useGetPlantsByCategoryInfiniteQuery
>;
export type GetPlantsByCategoryInfiniteLazyQueryHookResult = ReturnType<
   typeof useGetPlantsByCategoryInfiniteLazyQuery
>;
export type GetPlantsByCategoryInfiniteQueryResult = Apollo.QueryResult<
   GetPlantsByCategoryInfiniteQuery,
   GetPlantsByCategoryInfiniteQueryVariables
>;
export const CountPlantsByCategoryDocument = gql`
   query CountPlantsByCategory($category: String!) {
      plantCollection(where: { category: { slug: $category } }) {
         total
      }
   }
`;

/**
 * __useCountPlantsByCategoryQuery__
 *
 * To run a query within a React component, call `useCountPlantsByCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useCountPlantsByCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCountPlantsByCategoryQuery({
 *   variables: {
 *      category: // value for 'category'
 *   },
 * });
 */
export function useCountPlantsByCategoryQuery(
   baseOptions: Apollo.QueryHookOptions<
      CountPlantsByCategoryQuery,
      CountPlantsByCategoryQueryVariables
   >
) {
   const options = { ...defaultOptions, ...baseOptions };
   return Apollo.useQuery<
      CountPlantsByCategoryQuery,
      CountPlantsByCategoryQueryVariables
   >(CountPlantsByCategoryDocument, options);
}

export function useCountPlantsByCategoryLazyQuery(
   baseOptions?: Apollo.LazyQueryHookOptions<
      CountPlantsByCategoryQuery,
      CountPlantsByCategoryQueryVariables
   >
) {
   const options = { ...defaultOptions, ...baseOptions };
   return Apollo.useLazyQuery<
      CountPlantsByCategoryQuery,
      CountPlantsByCategoryQueryVariables
   >(CountPlantsByCategoryDocument, options);
}

export type CountPlantsByCategoryQueryHookResult = ReturnType<
   typeof useCountPlantsByCategoryQuery
>;
export type CountPlantsByCategoryLazyQueryHookResult = ReturnType<
   typeof useCountPlantsByCategoryLazyQuery
>;
export type CountPlantsByCategoryQueryResult = Apollo.QueryResult<
   CountPlantsByCategoryQuery,
   CountPlantsByCategoryQueryVariables
>;
export const GetCategoryBySlugDocument = gql`
   query GetCategoryBySlug($slug: String!) {
      categoryCollection(where: { slug: $slug }) {
         items {
            title
            color
            slug
            categoryDescription
            sys {
               id
            }
         }
      }
   }
`;

/**
 * __useGetCategoryBySlugQuery__
 *
 * To run a query within a React component, call `useGetCategoryBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCategoryBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCategoryBySlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetCategoryBySlugQuery(
   baseOptions: Apollo.QueryHookOptions<
      GetCategoryBySlugQuery,
      GetCategoryBySlugQueryVariables
   >
) {
   const options = { ...defaultOptions, ...baseOptions };
   return Apollo.useQuery<
      GetCategoryBySlugQuery,
      GetCategoryBySlugQueryVariables
   >(GetCategoryBySlugDocument, options);
}

export function useGetCategoryBySlugLazyQuery(
   baseOptions?: Apollo.LazyQueryHookOptions<
      GetCategoryBySlugQuery,
      GetCategoryBySlugQueryVariables
   >
) {
   const options = { ...defaultOptions, ...baseOptions };
   return Apollo.useLazyQuery<
      GetCategoryBySlugQuery,
      GetCategoryBySlugQueryVariables
   >(GetCategoryBySlugDocument, options);
}

export type GetCategoryBySlugQueryHookResult = ReturnType<
   typeof useGetCategoryBySlugQuery
>;
export type GetCategoryBySlugLazyQueryHookResult = ReturnType<
   typeof useGetCategoryBySlugLazyQuery
>;
export type GetCategoryBySlugQueryResult = Apollo.QueryResult<
   GetCategoryBySlugQuery,
   GetCategoryBySlugQueryVariables
>;
export const GetCategoryByIdDocument = gql`
   query GetCategoryById($id: String!) {
      category(id: $id) {
         title
         color
         slug
         categoryDescription
         sys {
            id
         }
      }
   }
`;

/**
 * __useGetCategoryByIdQuery__
 *
 * To run a query within a React component, call `useGetCategoryByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCategoryByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCategoryByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetCategoryByIdQuery(
   baseOptions: Apollo.QueryHookOptions<
      GetCategoryByIdQuery,
      GetCategoryByIdQueryVariables
   >
) {
   const options = { ...defaultOptions, ...baseOptions };
   return Apollo.useQuery<GetCategoryByIdQuery, GetCategoryByIdQueryVariables>(
      GetCategoryByIdDocument,
      options
   );
}

export function useGetCategoryByIdLazyQuery(
   baseOptions?: Apollo.LazyQueryHookOptions<
      GetCategoryByIdQuery,
      GetCategoryByIdQueryVariables
   >
) {
   const options = { ...defaultOptions, ...baseOptions };
   return Apollo.useLazyQuery<
      GetCategoryByIdQuery,
      GetCategoryByIdQueryVariables
   >(GetCategoryByIdDocument, options);
}

export type GetCategoryByIdQueryHookResult = ReturnType<
   typeof useGetCategoryByIdQuery
>;
export type GetCategoryByIdLazyQueryHookResult = ReturnType<
   typeof useGetCategoryByIdLazyQuery
>;
export type GetCategoryByIdQueryResult = Apollo.QueryResult<
   GetCategoryByIdQuery,
   GetCategoryByIdQueryVariables
>;
export const GetPlantsSlugsDocument = gql`
   query GetPlantsSlugs {
      plantCollection {
         items {
            slug
         }
      }
   }
`;

/**
 * __useGetPlantsSlugsQuery__
 *
 * To run a query within a React component, call `useGetPlantsSlugsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPlantsSlugsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPlantsSlugsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPlantsSlugsQuery(
   baseOptions?: Apollo.QueryHookOptions<
      GetPlantsSlugsQuery,
      GetPlantsSlugsQueryVariables
   >
) {
   const options = { ...defaultOptions, ...baseOptions };
   return Apollo.useQuery<GetPlantsSlugsQuery, GetPlantsSlugsQueryVariables>(
      GetPlantsSlugsDocument,
      options
   );
}

export function useGetPlantsSlugsLazyQuery(
   baseOptions?: Apollo.LazyQueryHookOptions<
      GetPlantsSlugsQuery,
      GetPlantsSlugsQueryVariables
   >
) {
   const options = { ...defaultOptions, ...baseOptions };
   return Apollo.useLazyQuery<
      GetPlantsSlugsQuery,
      GetPlantsSlugsQueryVariables
   >(GetPlantsSlugsDocument, options);
}

export type GetPlantsSlugsQueryHookResult = ReturnType<
   typeof useGetPlantsSlugsQuery
>;
export type GetPlantsSlugsLazyQueryHookResult = ReturnType<
   typeof useGetPlantsSlugsLazyQuery
>;
export type GetPlantsSlugsQueryResult = Apollo.QueryResult<
   GetPlantsSlugsQuery,
   GetPlantsSlugsQueryVariables
>;
export const GetPlantBySlugDocument = gql`
   query GetPlantBySlug($slug: String!) {
      plantCollection(where: { slug: $slug }) {
         items {
            plantName
            image {
               url
            }
            slug
            description {
               json
            }
            category {
               title
               color
               slug
            }
            sys {
               id
            }
            author {
               fullName
               sys {
                  id
               }
            }
         }
      }
   }
`;

/**
 * __useGetPlantBySlugQuery__
 *
 * To run a query within a React component, call `useGetPlantBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPlantBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPlantBySlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetPlantBySlugQuery(
   baseOptions: Apollo.QueryHookOptions<
      GetPlantBySlugQuery,
      GetPlantBySlugQueryVariables
   >
) {
   const options = { ...defaultOptions, ...baseOptions };
   return Apollo.useQuery<GetPlantBySlugQuery, GetPlantBySlugQueryVariables>(
      GetPlantBySlugDocument,
      options
   );
}

export function useGetPlantBySlugLazyQuery(
   baseOptions?: Apollo.LazyQueryHookOptions<
      GetPlantBySlugQuery,
      GetPlantBySlugQueryVariables
   >
) {
   const options = { ...defaultOptions, ...baseOptions };
   return Apollo.useLazyQuery<
      GetPlantBySlugQuery,
      GetPlantBySlugQueryVariables
   >(GetPlantBySlugDocument, options);
}

export type GetPlantBySlugQueryHookResult = ReturnType<
   typeof useGetPlantBySlugQuery
>;
export type GetPlantBySlugLazyQueryHookResult = ReturnType<
   typeof useGetPlantBySlugLazyQuery
>;
export type GetPlantBySlugQueryResult = Apollo.QueryResult<
   GetPlantBySlugQuery,
   GetPlantBySlugQueryVariables
>;
export const GetAuthorByIdDocument = gql`
   query GetAuthorById($id: String!) {
      author(id: $id) {
         fullName
         photo {
            url
            title
            height
            width
         }
         biography
         sys {
            id
         }
         twitter
         linkedIn
         linkedFrom {
            plantCollection {
               items {
                  slug
                  plantName
                  sys {
                     id
                  }
               }
            }
         }
      }
   }
`;

/**
 * __useGetAuthorByIdQuery__
 *
 * To run a query within a React component, call `useGetAuthorByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAuthorByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAuthorByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetAuthorByIdQuery(
   baseOptions: Apollo.QueryHookOptions<
      GetAuthorByIdQuery,
      GetAuthorByIdQueryVariables
   >
) {
   const options = { ...defaultOptions, ...baseOptions };
   return Apollo.useQuery<GetAuthorByIdQuery, GetAuthorByIdQueryVariables>(
      GetAuthorByIdDocument,
      options
   );
}

export function useGetAuthorByIdLazyQuery(
   baseOptions?: Apollo.LazyQueryHookOptions<
      GetAuthorByIdQuery,
      GetAuthorByIdQueryVariables
   >
) {
   const options = { ...defaultOptions, ...baseOptions };
   return Apollo.useLazyQuery<GetAuthorByIdQuery, GetAuthorByIdQueryVariables>(
      GetAuthorByIdDocument,
      options
   );
}

export type GetAuthorByIdQueryHookResult = ReturnType<
   typeof useGetAuthorByIdQuery
>;
export type GetAuthorByIdLazyQueryHookResult = ReturnType<
   typeof useGetAuthorByIdLazyQuery
>;
export type GetAuthorByIdQueryResult = Apollo.QueryResult<
   GetAuthorByIdQuery,
   GetAuthorByIdQueryVariables
>;
export const GetAuthorIdsDocument = gql`
   query GetAuthorIds {
      authorCollection {
         items {
            sys {
               id
            }
         }
      }
   }
`;

/**
 * __useGetAuthorIdsQuery__
 *
 * To run a query within a React component, call `useGetAuthorIdsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAuthorIdsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAuthorIdsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAuthorIdsQuery(
   baseOptions?: Apollo.QueryHookOptions<
      GetAuthorIdsQuery,
      GetAuthorIdsQueryVariables
   >
) {
   const options = { ...defaultOptions, ...baseOptions };
   return Apollo.useQuery<GetAuthorIdsQuery, GetAuthorIdsQueryVariables>(
      GetAuthorIdsDocument,
      options
   );
}

export function useGetAuthorIdsLazyQuery(
   baseOptions?: Apollo.LazyQueryHookOptions<
      GetAuthorIdsQuery,
      GetAuthorIdsQueryVariables
   >
) {
   const options = { ...defaultOptions, ...baseOptions };
   return Apollo.useLazyQuery<GetAuthorIdsQuery, GetAuthorIdsQueryVariables>(
      GetAuthorIdsDocument,
      options
   );
}

export type GetAuthorIdsQueryHookResult = ReturnType<
   typeof useGetAuthorIdsQuery
>;
export type GetAuthorIdsLazyQueryHookResult = ReturnType<
   typeof useGetAuthorIdsLazyQuery
>;
export type GetAuthorIdsQueryResult = Apollo.QueryResult<
   GetAuthorIdsQuery,
   GetAuthorIdsQueryVariables
>;
export const GetPlantsByAuthorDocument = gql`
   query GetPlantsByAuthor($id: String) {
      plantCollection(where: { author: { sys: { id: $id } } }) {
         items {
            plantName
            slug
            sys {
               id
            }
         }
      }
   }
`;

/**
 * __useGetPlantsByAuthorQuery__
 *
 * To run a query within a React component, call `useGetPlantsByAuthorQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPlantsByAuthorQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPlantsByAuthorQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPlantsByAuthorQuery(
   baseOptions?: Apollo.QueryHookOptions<
      GetPlantsByAuthorQuery,
      GetPlantsByAuthorQueryVariables
   >
) {
   const options = { ...defaultOptions, ...baseOptions };
   return Apollo.useQuery<
      GetPlantsByAuthorQuery,
      GetPlantsByAuthorQueryVariables
   >(GetPlantsByAuthorDocument, options);
}

export function useGetPlantsByAuthorLazyQuery(
   baseOptions?: Apollo.LazyQueryHookOptions<
      GetPlantsByAuthorQuery,
      GetPlantsByAuthorQueryVariables
   >
) {
   const options = { ...defaultOptions, ...baseOptions };
   return Apollo.useLazyQuery<
      GetPlantsByAuthorQuery,
      GetPlantsByAuthorQueryVariables
   >(GetPlantsByAuthorDocument, options);
}

export type GetPlantsByAuthorQueryHookResult = ReturnType<
   typeof useGetPlantsByAuthorQuery
>;
export type GetPlantsByAuthorLazyQueryHookResult = ReturnType<
   typeof useGetPlantsByAuthorLazyQuery
>;
export type GetPlantsByAuthorQueryResult = Apollo.QueryResult<
   GetPlantsByAuthorQuery,
   GetPlantsByAuthorQueryVariables
>;
export const GetAuthorImageByIdDocument = gql`
   query GetAuthorImageById($id: String!) {
      author(id: $id) {
         photo {
            url
            title
         }
      }
   }
`;

/**
 * __useGetAuthorImageByIdQuery__
 *
 * To run a query within a React component, call `useGetAuthorImageByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAuthorImageByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAuthorImageByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetAuthorImageByIdQuery(
   baseOptions: Apollo.QueryHookOptions<
      GetAuthorImageByIdQuery,
      GetAuthorImageByIdQueryVariables
   >
) {
   const options = { ...defaultOptions, ...baseOptions };
   return Apollo.useQuery<
      GetAuthorImageByIdQuery,
      GetAuthorImageByIdQueryVariables
   >(GetAuthorImageByIdDocument, options);
}

export function useGetAuthorImageByIdLazyQuery(
   baseOptions?: Apollo.LazyQueryHookOptions<
      GetAuthorImageByIdQuery,
      GetAuthorImageByIdQueryVariables
   >
) {
   const options = { ...defaultOptions, ...baseOptions };
   return Apollo.useLazyQuery<
      GetAuthorImageByIdQuery,
      GetAuthorImageByIdQueryVariables
   >(GetAuthorImageByIdDocument, options);
}

export type GetAuthorImageByIdQueryHookResult = ReturnType<
   typeof useGetAuthorImageByIdQuery
>;
export type GetAuthorImageByIdLazyQueryHookResult = ReturnType<
   typeof useGetAuthorImageByIdLazyQuery
>;
export type GetAuthorImageByIdQueryResult = Apollo.QueryResult<
   GetAuthorImageByIdQuery,
   GetAuthorImageByIdQueryVariables
>;
export const GetAuthorHandleAndIdsDocument = gql`
   query GetAuthorHandleAndIds {
      authorCollection {
         items {
            handle
            sys {
               id
            }
         }
      }
   }
`;

/**
 * __useGetAuthorHandleAndIdsQuery__
 *
 * To run a query within a React component, call `useGetAuthorHandleAndIdsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAuthorHandleAndIdsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAuthorHandleAndIdsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAuthorHandleAndIdsQuery(
   baseOptions?: Apollo.QueryHookOptions<
      GetAuthorHandleAndIdsQuery,
      GetAuthorHandleAndIdsQueryVariables
   >
) {
   const options = { ...defaultOptions, ...baseOptions };
   return Apollo.useQuery<
      GetAuthorHandleAndIdsQuery,
      GetAuthorHandleAndIdsQueryVariables
   >(GetAuthorHandleAndIdsDocument, options);
}

export function useGetAuthorHandleAndIdsLazyQuery(
   baseOptions?: Apollo.LazyQueryHookOptions<
      GetAuthorHandleAndIdsQuery,
      GetAuthorHandleAndIdsQueryVariables
   >
) {
   const options = { ...defaultOptions, ...baseOptions };
   return Apollo.useLazyQuery<
      GetAuthorHandleAndIdsQuery,
      GetAuthorHandleAndIdsQueryVariables
   >(GetAuthorHandleAndIdsDocument, options);
}

export type GetAuthorHandleAndIdsQueryHookResult = ReturnType<
   typeof useGetAuthorHandleAndIdsQuery
>;
export type GetAuthorHandleAndIdsLazyQueryHookResult = ReturnType<
   typeof useGetAuthorHandleAndIdsLazyQuery
>;
export type GetAuthorHandleAndIdsQueryResult = Apollo.QueryResult<
   GetAuthorHandleAndIdsQuery,
   GetAuthorHandleAndIdsQueryVariables
>;
export const GetPlantsWithAuthorsDocument = gql`
   query GetPlantsWithAuthors {
      plantCollection {
         items {
            sys {
               id
               firstPublishedAt
            }
            author {
               sys {
                  id
               }
            }
         }
      }
   }
`;

/**
 * __useGetPlantsWithAuthorsQuery__
 *
 * To run a query within a React component, call `useGetPlantsWithAuthorsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPlantsWithAuthorsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPlantsWithAuthorsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPlantsWithAuthorsQuery(
   baseOptions?: Apollo.QueryHookOptions<
      GetPlantsWithAuthorsQuery,
      GetPlantsWithAuthorsQueryVariables
   >
) {
   const options = { ...defaultOptions, ...baseOptions };
   return Apollo.useQuery<
      GetPlantsWithAuthorsQuery,
      GetPlantsWithAuthorsQueryVariables
   >(GetPlantsWithAuthorsDocument, options);
}

export function useGetPlantsWithAuthorsLazyQuery(
   baseOptions?: Apollo.LazyQueryHookOptions<
      GetPlantsWithAuthorsQuery,
      GetPlantsWithAuthorsQueryVariables
   >
) {
   const options = { ...defaultOptions, ...baseOptions };
   return Apollo.useLazyQuery<
      GetPlantsWithAuthorsQuery,
      GetPlantsWithAuthorsQueryVariables
   >(GetPlantsWithAuthorsDocument, options);
}

export type GetPlantsWithAuthorsQueryHookResult = ReturnType<
   typeof useGetPlantsWithAuthorsQuery
>;
export type GetPlantsWithAuthorsLazyQueryHookResult = ReturnType<
   typeof useGetPlantsWithAuthorsLazyQuery
>;
export type GetPlantsWithAuthorsQueryResult = Apollo.QueryResult<
   GetPlantsWithAuthorsQuery,
   GetPlantsWithAuthorsQueryVariables
>;
