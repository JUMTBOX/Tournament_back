export class TeamDto {
  /** @description 팀 아이디 */
  teamId: number;
  /** @description 대회 아이디 */
  tournamentId: number;
  /** @description 그룹 아이디 */
  groupId: number;
  /** @description 부(division) 아이디 */
  divisionId: number;
  /** @description 팀 명 */
  teamName?: string;
  /** @description 팀 설명 */
  teamDescription?: string;
  /** @description 팀 로고 url */
  logoUrl?: string;
}
