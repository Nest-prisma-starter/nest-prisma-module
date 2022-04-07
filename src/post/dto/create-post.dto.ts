import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CreatePostDto {
  @ApiProperty()
  title: string;
  @ApiPropertyOptional()
  content?: string;
}
