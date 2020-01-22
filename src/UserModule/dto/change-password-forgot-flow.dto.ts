import { ApiModelProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { Expose } from 'class-transformer';

export class ChangePasswordForgotFlowDTO {
  @ApiModelProperty({ type: String })
  @IsString()
  @Expose()
  newPassword: string;

  @ApiModelProperty({ type: String })
  @IsString()
  @Expose()
  confirmNewPassword: string;
}