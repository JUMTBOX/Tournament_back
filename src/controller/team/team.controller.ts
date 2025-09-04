import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { TeamService } from '../../service/team/team.service';
import { Team } from 'src/entity/team/team.entity';

@Controller('/team/*')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @Get()
  gett() {
    return 'here!';
  }

  @Post('create')
  create(@Body() body: Team) {
    console.log('바리 > ', body);

    // this.teamService.create();
    return 'done';
  }
}
