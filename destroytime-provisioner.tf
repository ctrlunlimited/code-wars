resource "aws_instance" "myec2"{
  ami = ""
  instance_type = "t2.micro"

  provisioner "local-exec" {
    command = "echo server created"
	}

  provisioner "local-exec" {
    command = "echo server is being destroyed"
    when = destroy
	}
}
