export interface IPersonDetails {
  adult: boolean;
  also_known_as: string[];
  biography: string;
  birthday: string;
  deathday: string | null;
  gender: number;
  homepage: string | null;
  id: number;
  imdb_id: string;
  known_for_department: string;
  name: string;
  place_of_birth: string | null;
  popularity: number;
  profile_path: string | null;
}

export interface IExternalIDs {
  id: number;
  imdb_id: string | null;
  facebook_id: string | null;
  instagram_id: string | null;
  twitter_id: string | null;
  youtube_id: string | null;
}

interface IPeronsCreditsResponse {
  adult: boolean;
  backdrop_path: string | null;
  id: number;
  original_language: string;
  original_title?: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date?: string;
  title?: string;
  video?: boolean;
  vote_average: number;
  vote_count: number;

  name?: string;
  first_air_date?: string;

  character: string;
  credit_id: string;
  order: number;
  media_type: "movie" | "tv";
}

export interface IPersonCombinedCredit {
  cast: IPeronsCreditsResponse[];
  crew: IPeronsCreditsResponse[];
}
