resource "aws_iam_user" "lb" {
  name = "loady"

  provisioner "local-exec" {
    command = "echo provisioner is starting"
    on_failure = continue
  }
}