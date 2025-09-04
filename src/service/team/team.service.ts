import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, Repository } from 'typeorm';
import { Team } from '../../entity/team/team.entity';

@Injectable()
export class TeamService {
  constructor(@InjectRepository(Team) private repo: Repository<Team>) {}

  create({
    teamName,
    teamDescription,
    teamLogoUrl,
    tournamentId,
  }: Partial<Team>) {
    return this.repo.save({
      teamName,
      teamDescription,
      teamLogoUrl,
      tournamentId,
    });
  }

  findAll() {
    return this.repo.find();
  }

  findByTournament(tournamentId: FindOptionsWhere<Team>) {
    return this.repo.findBy(tournamentId);
  }
}
