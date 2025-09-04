import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, Repository } from 'typeorm';
import { Team } from '../../entity/team/team.entity';
import { TeamDto } from 'src/entity/team/team.dto';

@Injectable()
export class TeamService {
  constructor(@InjectRepository(Team) private repo: Repository<Team>) {}

  createTeam({ teamName, teamDescription, logoUrl }: Partial<TeamDto>) {
    return this.repo.save({
      team_name: teamName,
      team_description: teamDescription,
      logo_url: logoUrl,
    });
  }

  findAll() {
    return this.repo.find();
  }

  findBy(optionsWhere: FindOptionsWhere<Team>) {
    return this.repo.findBy(optionsWhere);
  }
}
