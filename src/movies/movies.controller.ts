import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'this wil return all movie';
  }
  @Get('/search')
  search(@Query('year') year: string) {
    return `searcing movie ${year}`;
  }
  @Get('/:id')
  getMovie(@Param('id') id: string) {
    return `this return one movie with id:${id}`;
  }
  @Post()
  create(@Body() movieData: { name: string; date: string }) {
    return movieData;
  }
  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return `this delete movie id ${movieId}`;
  }
  @Patch('/:id')
  patch(
    @Param('id') movieId: string,
    @Body() movieData: { name: string; date: string },
  ) {
    return {
      updatedMovie: movieId,
      ...movieData,
    };
  }
}
