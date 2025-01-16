//local-exec
resource "aws_instance" "myec2"{
  ami = ""
  instance_type = "t2.micro"
  provisioner "local-exec" {
    command = "echo server created"
	}
}

//remote-exec
resource "aws_instance" "myec2" {
   ami = "ami-04e5276ebb8451442"
   instance_type = "t2.micro"
   key_name = "devops"
   vpc_security_group_ids = ["sg-0edf854d7112cfbf4"]

  connection {
    type = "ssh"
    user = "ec2-user"
    private_key = file("./devops.pem")
    host = self.public_ip
  }
  provisioner "remote-exec" {
    inline = [ 
        "sudo yum install -y nginx",
        "sudo systemctl start nginx"
     ]
  }
}