import Map "mo:core/Map";
import Array "mo:core/Array";
import Int "mo:core/Int";
import Time "mo:core/Time";
import Text "mo:core/Text";
import Runtime "mo:core/Runtime";
import Order "mo:core/Order";

actor {
  type Submission = {
    name : Text;
    email : Text;
    phone : Text;
    message : Text;
    timestamp : Time.Time;
  };

  module Submission {
    public func compare(sub1 : Submission, sub2 : Submission) : Order.Order {
      Int.compare(sub2.timestamp, sub1.timestamp);
    };
  };

  let submissions = Map.empty<Text, Submission>();

  public shared ({ caller }) func submitContactForm(
    id : Text,
    name : Text,
    email : Text,
    phone : Text,
    message : Text,
  ) : async () {
    if (submissions.containsKey(id)) { Runtime.trap("Submission with this ID already exists") };
    let newSubmission : Submission = {
      name;
      email;
      phone;
      message;
      timestamp = Time.now();
    };
    submissions.add(id, newSubmission);
  };

  public shared ({ caller }) func getAllSubmissions(adminKey : Text) : async [Submission] {
    if (adminKey != "admin123") { Runtime.trap("Unauthorized access"); };
    submissions.values().toArray().sort();
  };
};
