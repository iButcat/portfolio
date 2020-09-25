provider "aws" {
  access_key = "AKIA4MZ4DDRW34AAQZ67"
  secret_key = "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"
  region     = "us-east-2"
}

resource "aws_instance" "web" {
  ami           = "ami-0b59bfac6be064b78"
  instance_type = "t2.micro"
  tags = {
    Name = "portfolio-api"
  }
}
