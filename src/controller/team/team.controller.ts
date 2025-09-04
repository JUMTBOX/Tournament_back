import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { TeamService } from '../../service/team/team.service';
import { TeamDto } from 'src/entity/team/team.dto';

@Controller('team')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @Get()
  getTeam(@Query('teamName') teamName: string) {
    return this.teamService.findBy({ team_name: teamName });
  }

  @Get()
  getAllTeam() {
    return this.teamService.findAll();
  }

  @Post('create')
  create(@Body() body: TeamDto) {
    this.teamService.createTeam(body);
  }

  @Post('createmulti')
  createMulti(@Body() body: TeamDto[]) {
    for (const team of body) {
      this.teamService.createTeam(team);
    }
  }
}
