module "ec2" {
  source = "https://example.com/vpc-module.zip"
}

//referencing local-path modules

module "ec2" {
  source = "../modules/ec2"
}

//ref for gits

module "ec2" {
  source = "git::https://example.com"
}
