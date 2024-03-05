export interface SearchResponse {
  data: Gif[];
  meta: Meta;
  pagination: Pagination;
}

export interface Gif {
  analytics: Analytics;
  analytics_response_payload: string;
  bitly_gif_url: string;
  bitly_url: string;
  content_url: string;
  embed_url: string;
  id: string;
  images: Images;
  import_datetime: Date;
  is_sticker: number;
  rating: Rating;
  slug: string;
  source: string;
  source_post_url: string;
  source_tld: SourceTLD;
  title: string;
  trending_datetime: string;
  type: Type;
  url: string;
  user: User;
  username: string;
}

export interface Analytics {
  onclick: Onclick;
  onload: Onclick;
  onsent: Onclick;
}

export interface Onclick {
  url: string;
}

export interface Images {
  '480w_still': The480_WStill;
  downsized: The480_WStill;
  downsized_large: The480_WStill;
  downsized_medium: The480_WStill;
  downsized_small: DownsizedSmall;
  downsized_still: The480_WStill;
  fixed_height: FixedHeight;
  fixed_height_downsampled: FixedHeight;
  fixed_height_small: FixedHeight;
  fixed_height_small_still: The480_WStill;
  fixed_height_still: The480_WStill;
  fixed_width: FixedHeight;
  fixed_width_downsampled: FixedHeight;
  fixed_width_small: FixedHeight;
  fixed_width_small_still: The480_WStill;
  fixed_width_still: The480_WStill;
  hd?: DownsizedSmall;
  looping: Looping;
  original: FixedHeight;
  original_mp4: DownsizedSmall;
  original_still: The480_WStill;
  preview: DownsizedSmall;
  preview_gif: The480_WStill;
  preview_webp: The480_WStill;
}

export interface The480_WStill {
  height: string;
  size: string;
  url: string;
  width: string;
}

export interface DownsizedSmall {
  height: string;
  mp4: string;
  mp4_size: string;
  width: string;
}

export interface FixedHeight {
  frames?: string;
  hash?: string;
  height: string;
  mp4?: string;
  mp4_size?: string;
  size: string;
  url: string;
  webp: string;
  webp_size: string;
  width: string;
}

export interface Looping {
  mp4: string;
  mp4_size: string;
}

export enum Rating {
  G = 'g',
  PG = 'pg',
}

export enum SourceTLD {
  Empty = '',
  WWWTwitchTv = 'www.twitch.tv',
}

export enum Type {
  GIF = 'gif',
}

export interface User {
  avatar_url: string;
  banner_image: string;
  banner_url: string;
  description: string;
  display_name: string;
  instagram_url: string;
  is_verified: boolean;
  profile_url: string;
  username: string;
  website_url: string;
}

export interface Meta {
  msg: string;
  response_id: string;
  status: number;
}

export interface Pagination {
  count: number;
  offset: number;
  total_count: number;
}
